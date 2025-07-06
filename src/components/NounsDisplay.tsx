// src/components/NounsDisplay.tsx
import { FC, HTMLAttributes, useState, useEffect } from 'react';
import { getNounData, ImageData } from '@noundry/nouns-assets';
import { buildSVG } from '@nouns/sdk';
import { useQuery } from '@tanstack/react-query';
import loadingNoun from '../assets/loading-skull-noun.gif';
import { useReadNounsTokenSeeds } from '../contracts/nouns-token.gen';

export interface INounSeed {
  accessory: number;
  background: number;
  body: number;
  glasses: number;
  head: number;
}

export interface NounProps extends HTMLAttributes<HTMLImageElement> {
  nounId?: bigint;
  seed?: INounSeed;
  loadingNounFallback?: boolean;
  minFallbackDuration?: number;
}

const fallbackTransparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

export const Noun: FC<NounProps> = ({
  nounId,
  seed: providedSeed,
  loadingNounFallback,
  minFallbackDuration = 0,
  ...props
}) => {
  const [shouldShowFallback, setShouldShowFallback] = useState(false);
  const [fallbackStartTime, setFallbackStartTime] = useState<number | null>(null);

  // This is the correct way to use the generated hook.
  const { data: fetchedSeed } = useReadNounsTokenSeeds({
    // Add a safety check: only pass args if nounId is defined.
    args: nounId !== undefined ? [nounId] : undefined,
    query: {
      enabled: nounId !== undefined && !providedSeed,
      select: (data) => { // data is already typed from the generated hook
        if (!data) return undefined;
        return {
          background: data[0],
          body: data[1],
          accessory: data[2],
          head: data[3],
          glasses: data[4],
        };
      },
    },
  });

  const seed = providedSeed ?? fetchedSeed;

  const { data: svg } = useQuery({
    queryKey: ['noun-svg', seed],
    queryFn: () => {
      if (!seed) return null; // Safety check
      const { parts, background } = getNounData(seed);
      return buildSVG(parts, ImageData.palette, background);
    },
    enabled: !!seed,
  });

  // Handle fallback timing logic
  useEffect(() => {
    if (!svg && loadingNounFallback && !shouldShowFallback && !fallbackStartTime) {
      setShouldShowFallback(true);
      setFallbackStartTime(Date.now());
    } else if (svg && shouldShowFallback && fallbackStartTime) {
      const elapsed = Date.now() - fallbackStartTime;
      if (elapsed >= minFallbackDuration) {
        setShouldShowFallback(false);
        setFallbackStartTime(null);
      } else {
        const remainingTime = minFallbackDuration - elapsed;
        const timeoutId = setTimeout(() => {
          setShouldShowFallback(false);
          setFallbackStartTime(null);
        }, remainingTime);
        return () => clearTimeout(timeoutId);
      }
    } else if (!loadingNounFallback && shouldShowFallback) {
      setShouldShowFallback(false);
      setFallbackStartTime(null);
    }
  }, [svg, loadingNounFallback, shouldShowFallback, fallbackStartTime, minFallbackDuration]);

  if (shouldShowFallback) return <img {...props} src={loadingNoun} />;

  return (
    <img
      {...props}
      src={svg ? `data:image/svg+xml;base64,${btoa(svg)}` : fallbackTransparentPixel}
    />
  );
};