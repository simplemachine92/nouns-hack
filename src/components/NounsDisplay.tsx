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
  preloadedDataUrl?: string;
}

const fallbackTransparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

export const Noun: FC<NounProps> = ({
  nounId,
  seed: providedSeed,
  loadingTransitionDelay = 300,
  preloadedDataUrl,
  ...props
}) => {
  if (preloadedDataUrl) {
    return (
      <img
        {...props}
        src={preloadedDataUrl}
        alt={nounId !== undefined ? `Noun ${nounId}` : 'Noun'}
      />
    );
  }

  const { nounsTokenAddress: contractAddress } = useConfigurableContracts();

  // 1. Destructure isError and error from the hook
  const { 
    data: fetchedSeed, 
    isLoading: isSeedLoading,
    isError,
    error,
  } = useReadContract({
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

  // 2. Add a new render block to handle the error state
  if (isError) {
    // Log the technical error for developer debugging
    console.error("Error fetching Noun seed:", error);

    // Define some simple styles for the error message
    const errorContainerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      border: '1px dashed #d1d5db',
      borderRadius: '12px',
      backgroundColor: '#f9fafb',
      height: '100%',
      minHeight: '200px', // Give it some visible space
      boxSizing: 'border-box'
    };

    return (
      <div style={errorContainerStyles}>
        <p style={{ margin: 0, fontWeight: 600, color: '#ef4444' }}>
          Failed to load Noun data
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.9em', color: '#6b7280' }}>
          Please check your contract address and RPC in User Settings.
        </p>
      </div>
    );
  }

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