// src/components/NounsDisplay.tsx
import { FC, HTMLAttributes, useState, useEffect } from 'react';
import { getNounData, ImageData } from '@noundry/nouns-assets';
import { buildSVG } from '@nouns/sdk';
import { useQuery } from '@tanstack/react-query';
import loadingNoun from '../assets/loading-skull-noun.gif';

import { useReadContract } from 'wagmi';
import { nounsTokenAbi } from '../contracts/nouns-token.gen';
import { useConfigurableContracts } from '../contexts/ConfigurableContractProvider';

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
  loadingTransitionDelay?: number;
  // 1. Add a new prop to accept a pre-rendered data URL
  preloadedDataUrl?: string;
}

const fallbackTransparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

export const Noun: FC<NounProps> = ({
  nounId,
  seed: providedSeed,
  loadingTransitionDelay = 300,
  preloadedDataUrl, // Destructure the new prop
  ...props
}) => {
  // 2. If pre-loaded data is provided, render it immediately and skip everything else.
  if (preloadedDataUrl) {
    return (
      <img
        {...props}
        src={preloadedDataUrl}
        alt={nounId !== undefined ? `Noun ${nounId}` : 'Noun'}
      />
    );
  }

  // --- The rest of the component is now the FALLBACK logic ---
  // --- It will only run if `preloadedDataUrl` is not provided. ---

  const { nounsTokenAddress: contractAddress } = useConfigurableContracts();

  const { data: fetchedSeed, isLoading: isSeedLoading } = useReadContract({
    abi: nounsTokenAbi,
    address: contractAddress,
    functionName: 'seeds',
    args: nounId !== undefined ? [nounId] : undefined,
    query: {
      enabled: nounId !== undefined && !providedSeed,
      select: (data: readonly [number, number, number, number, number]) => {
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

  const { data: svg, isLoading: isSvgLoading } = useQuery({
    queryKey: ['noun-svg', seed],
    queryFn: () => {
      if (!seed) return null;
      const { parts, background } = getNounData(seed);
      return buildSVG(parts, ImageData.palette, background);
    },
    enabled: !!seed,
  });

  const isDataLoading = (isSeedLoading && !providedSeed) || (isSvgLoading && !!seed && !svg);
  const [isDisplayingLoader, setIsDisplayingLoader] = useState(isDataLoading);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDataLoading) {
      setIsDisplayingLoader(true);
    } else {
      timer = setTimeout(() => {
        setIsDisplayingLoader(false);
      }, loadingTransitionDelay);
    }
    return () => clearTimeout(timer);
  }, [isDataLoading, loadingTransitionDelay]);

  if (isDisplayingLoader) {
    return <img {...props} src={loadingNoun} alt="Loading Noun..." />;
  }

  return (
    <img
      {...props}
      src={svg ? `data:image/svg+xml;base64,${btoa(svg)}` : fallbackTransparentPixel}
      alt={nounId !== undefined ? `Noun ${nounId}` : 'Noun'}
    />
  );
};