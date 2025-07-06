// src/App.tsx
import { useState, useMemo } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, coinbaseWallet, walletConnect } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuctionActivity } from './components/AuctionActivity';
import { SettingsPage } from './components/SettingsPage';
import Wallet from './components/Wallet';
import { ConfigurableContractProvider } from './contexts/ConfigurableContractProvider';
// Assuming you have this provider from your error stack
import { ConfigurableApolloProvider } from './contexts/ConfigurableApolloProvider'; 

const queryClient = new QueryClient();
const PUBLIC_RPC_URL = 'https://eth.llamarpc.com';
const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WC_PROJECT_ID;

if (!WALLETCONNECT_PROJECT_ID) {
  throw new Error("VITE_WC_PROJECT_ID is not set in your .env file.");
}

function App() {
  const [inputValue, setInputValue] = useState<string>(PUBLIC_RPC_URL);
  const [activeRpcUrl, setActiveRpcUrl] = useState<string>(PUBLIC_RPC_URL);

  const wagmiConfig = useMemo(() => {
    return createConfig({
      chains: [mainnet, sepolia],
      connectors: [
          injected(),
          coinbaseWallet({ appName: 'My Awesome App' }),
          walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }),
      ],
      transports: {
        [mainnet.id]: http(activeRpcUrl),
        [sepolia.id]: http(),
      },
    });
  }, [activeRpcUrl]);

  const handleApplyRpc = () => {
    if (inputValue.startsWith('http://') || inputValue.startsWith('https://')) {
      setActiveRpcUrl(inputValue);
    } else {
      alert('Invalid RPC URL. Must start with http:// or https://');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig} key={activeRpcUrl}>
        <ConfigurableApolloProvider>
          <ConfigurableContractProvider>
            <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
              <Wallet/>
              <AuctionActivity />
              <SettingsPage
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleApplyRpc={handleApplyRpc}
                activeRpcUrl={activeRpcUrl}
              />
              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '2rem 0' }} />
            </div>
          </ConfigurableContractProvider>
        </ConfigurableApolloProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export default App;