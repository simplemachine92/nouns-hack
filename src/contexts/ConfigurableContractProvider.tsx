// src/contexts/ConfigurableContractProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAccount } from 'wagmi';
// Import default addresses for BOTH contracts
import { nounsTokenAddress as defaultNounsTokenAddresses } from '../contracts/nouns-token.gen';
import { nounsAuctionHouseAddress as defaultAuctionHouseAddresses } from '../contracts/nouns-auction-house.gen';

// Define distinct local storage keys for each contract
const TOKEN_STORAGE_KEY = 'customNounsTokenAddress';
const AUCTION_HOUSE_STORAGE_KEY = 'customNounsAuctionHouseAddress';

// Update the context to provide both addresses and their setters
interface ConfigurableContractContextType {
  nounsTokenAddress: `0x${string}`;
  setNounsTokenAddress: (address: `0x${string}`) => void;
  defaultNounsTokenAddress: `0x${string}`;
  
  nounsAuctionHouseAddress: `0x${string}`;
  setNounsAuctionHouseAddress: (address: `0x${string}`) => void;
  defaultAuctionHouseAddress: `0x${string}`;
}

export const ConfigurableContractContext = createContext<ConfigurableContractContextType | null>(null);

export const ConfigurableContractProvider = ({ children }: { children: ReactNode }) => {
  const { chain } = useAccount(); 

  // Determine defaults for the current chain for BOTH contracts
  const defaultNounsTokenAddress = (chain ? defaultNounsTokenAddresses[chain.id] : undefined) || defaultNounsTokenAddresses[1];
  const defaultAuctionHouseAddress = (chain ? defaultAuctionHouseAddresses[chain.id] : undefined) || defaultAuctionHouseAddresses[1];

  // --- State for Nouns Token ---
  const [nounsTokenAddress, setNounsTokenAddressState] = useState<`0x${string}`>(() => {
    return (localStorage.getItem(TOKEN_STORAGE_KEY) as `0x${string}`) || defaultNounsTokenAddress;
  });

  const setNounsTokenAddress = (newAddress: `0x${string}`) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, newAddress);
    setNounsTokenAddressState(newAddress);
  };
  
  // --- State for Nouns Auction House ---
  const [nounsAuctionHouseAddress, setNounsAuctionHouseAddressState] = useState<`0x${string}`>(() => {
    return (localStorage.getItem(AUCTION_HOUSE_STORAGE_KEY) as `0x${string}`) || defaultAuctionHouseAddress;
  });
  
  const setNounsAuctionHouseAddress = (newAddress: `0x${string}`) => {
    localStorage.setItem(AUCTION_HOUSE_STORAGE_KEY, newAddress);
    setNounsAuctionHouseAddressState(newAddress);
  };

  // Effect to update defaults when chain changes
  useEffect(() => {
    // If no custom token address is set, follow the chain's default
    if (!localStorage.getItem(TOKEN_STORAGE_KEY)) {
      setNounsTokenAddressState(defaultNounsTokenAddress);
    }
    // If no custom auction house address is set, follow the chain's default
    if (!localStorage.getItem(AUCTION_HOUSE_STORAGE_KEY)) {
      setNounsAuctionHouseAddressState(defaultAuctionHouseAddress);
    }
  }, [chain, defaultNounsTokenAddress, defaultAuctionHouseAddress]);

  const contextValue: ConfigurableContractContextType = {
    nounsTokenAddress,
    setNounsTokenAddress,
    defaultNounsTokenAddress,
    nounsAuctionHouseAddress,
    setNounsAuctionHouseAddress,
    defaultAuctionHouseAddress,
  };

  return (
    <ConfigurableContractContext.Provider value={contextValue}>
      {children}
    </ConfigurableContractContext.Provider>
  );
};

export const useConfigurableContracts = () => {
  const context = useContext(ConfigurableContractContext);
  if (!context) {
    throw new Error('useConfigurableContracts must be used within a ConfigurableContractProvider');
  }
  return context;
};