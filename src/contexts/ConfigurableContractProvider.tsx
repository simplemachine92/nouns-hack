// src/contexts/ConfigurableContractProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAccount } from 'wagmi';
import { nounsTokenAddress } from '../contracts/nouns-token.gen';

interface ConfigurableContractContextType {
  contractAddress: `0x${string}`;
  setContractAddress: (address: `0x${string}`) => void;
  defaultAddress: `0x${string}`;
}

const LOCAL_STORAGE_KEY = 'customNounsTokenAddress';

export const ConfigurableContractContext = createContext<ConfigurableContractContextType | null>(null);

export const ConfigurableContractProvider = ({ children }: { children: ReactNode }) => {
  // This hook is what causes the dependency on WagmiProvider
  const { chain } = useAccount(); 

  // FIX: Safely determine the default address for the current chain.
  // When `chain` is undefined (not connected), this will now correctly fall back.
  const defaultAddressForChain = (chain ? nounsTokenAddress[chain.id] : undefined) || nounsTokenAddress[1];

  const [contractAddress, setContractAddressState] = useState<`0x${string}`>(() => {
    return (localStorage.getItem(LOCAL_STORAGE_KEY) as `0x${string}`) || defaultAddressForChain;
  });

  const setContractAddress = (newAddress: `0x${string}`) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, newAddress);
    setContractAddressState(newAddress);
  };

  useEffect(() => {
    const storedAddress = localStorage.getItem(LOCAL_STORAGE_KEY);
    // If no custom address is set, follow the chain's default
    if (!storedAddress) {
      setContractAddressState(defaultAddressForChain);
    }
  }, [chain, defaultAddressForChain]);

  const contextValue: ConfigurableContractContextType = {
    contractAddress,
    setContractAddress,
    defaultAddress: defaultAddressForChain,
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