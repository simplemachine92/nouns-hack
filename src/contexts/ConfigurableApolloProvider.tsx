// src/contexts/ConfigurableApolloProvider.tsx

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { clientFactory } from '../lib/apolloClient';

const PUBLIC_FALLBACK_URL = 'https://api.thegraph.com/subgraphs/id/5qcR6rAfDMZCVGuZ6DDois7y4zyXqsyqvaqhE6NRRraW';
const LOCAL_STORAGE_KEY = 'customGraphUrl';

interface IApolloContext {
  setGraphUrl: (url: string) => void;
  currentGraphUrl: string;
}

const ConfigurableApolloContext = createContext<IApolloContext>({
  setGraphUrl: () => { throw new Error('setGraphUrl function must be overridden'); },
  currentGraphUrl: '',
});

export const useConfigurableApolloClient = () => useContext(ConfigurableApolloContext);

export const ConfigurableApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const [graphUrl, setGraphUrlState] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || PUBLIC_FALLBACK_URL;
  });

  const client = useMemo(() => {
    console.log(`Creating Apollo Client for URL: ${graphUrl}`);
    return clientFactory(graphUrl);
  }, [graphUrl]);

  useEffect(() => {
    client.reFetchObservableQueries();
  }, [client]);

  const setGraphUrl = (newUrl: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, newUrl);
    setGraphUrlState(newUrl); // This state update will trigger the useMemo above.
  };

  const contextValue = {
    setGraphUrl,
    currentGraphUrl: graphUrl,
  };

  return (
    <ConfigurableApolloContext.Provider value={contextValue}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ConfigurableApolloContext.Provider>
  );
};