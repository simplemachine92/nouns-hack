// src/components/SettingsPage.tsx
import React, { useState } from 'react';
import { isAddress } from 'viem';
import { useConfigurableApolloClient } from '../contexts/ConfigurableApolloProvider';
import { useConfigurableContracts } from '../contexts/ConfigurableContractProvider';

// --- A simple hamburger icon component ---
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// --- Component Props ---
interface SettingsPageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleApplyRpc: () => void;
  activeRpcUrl: string;
}

export const SettingsPage = ({
  inputValue,
  setInputValue,
  handleApplyRpc,
  activeRpcUrl,
}: SettingsPageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setGraphUrl, currentGraphUrl } = useConfigurableApolloClient();
  const [graphUrlInput, setGraphUrlInput] = useState(currentGraphUrl);
  const [isGraphSaved, setIsGraphSaved] = useState(false);

  // Destructure all the new values from our updated hook
  const { 
    nounsTokenAddress, setNounsTokenAddress, defaultNounsTokenAddress,
    nounsAuctionHouseAddress, setNounsAuctionHouseAddress, defaultAuctionHouseAddress 
  } = useConfigurableContracts();

  // State for Nouns Token input
  const [tokenInput, setTokenInput] = useState<string>(nounsTokenAddress);
  const [tokenMessage, setTokenMessage] = useState('');

  // State for Auction House input
  const [auctionHouseInput, setAuctionHouseInput] = useState<string>(nounsAuctionHouseAddress);
  const [auctionHouseMessage, setAuctionHouseMessage] = useState('');

  const handleGraphSave = () => {
    if (graphUrlInput.trim()) {
      setGraphUrl(graphUrlInput);
      setIsGraphSaved(true);
      setTimeout(() => setIsGraphSaved(false), 3000);
    }
  };

  const handleTokenSave = () => {
    if (isAddress(tokenInput)) {
      setNounsTokenAddress(tokenInput as `0x${string}`);
      setTokenMessage('✅ Address saved successfully!');
    } else {
      setTokenMessage('❌ Invalid Ethereum address.');
    }
    setTimeout(() => setTokenMessage(''), 3000);
  };

  const handleTokenReset = () => {
    setNounsTokenAddress(defaultNounsTokenAddress);
    setTokenInput(defaultNounsTokenAddress);
    setTokenMessage('✅ Address reset to default for the current chain.');
    setTimeout(() => setTokenMessage(''), 3000);
  };

  const handleAuctionHouseSave = () => {
    if (isAddress(auctionHouseInput)) {
      setNounsAuctionHouseAddress(auctionHouseInput as `0x${string}`);
      setAuctionHouseMessage('✅ Address saved successfully!');
    } else {
      setAuctionHouseMessage('❌ Invalid Ethereum address.');
    }
    setTimeout(() => setAuctionHouseMessage(''), 3000);
  };

  const handleAuctionHouseReset = () => {
    setNounsAuctionHouseAddress(defaultAuctionHouseAddress);
    setAuctionHouseInput(defaultAuctionHouseAddress);
    setAuctionHouseMessage('✅ Address reset to default for the current chain.');
    setTimeout(() => setAuctionHouseMessage(''), 3000);
  };

  // --- STYLES for the collapsible panel ---
  const styles = {
    settingsContainer: {
        margin: '20px 0',
    },
    toggleButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      padding: '12px 16px',
      fontSize: '16px',
      fontWeight: 600,
      textAlign: 'left' as 'left',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      cursor: 'pointer',
    },
    panel: {
      overflow: 'hidden',
      transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out, padding 0.5s ease-out',
      maxHeight: isOpen ? '1000px' : '0',
      opacity: isOpen ? 1 : 0,
      border: '1px solid #ccc',
      borderTop: 'none',
      borderRadius: '0 0 8px 8px',
      padding: isOpen ? '16px' : '0 16px',
    }
  };

  return (
    <div style={styles.settingsContainer}>
      <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
        <HamburgerIcon />
        User Settings
      </button>

      <div style={styles.panel}>
        <h2 style={{ marginTop: '0' }}>Application Settings</h2>

        <div>
          <h3>RPC Endpoint (for Wallet Connection)</h3>
          <input id="rpc-url" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="https://mainnet.infura.io/v3/..." style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }} />
          <button onClick={handleApplyRpc} style={{ padding: '10px 15px' }}>Apply RPC</button>
          <p style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>Currently using: <code>{activeRpcUrl}</code></p>
        </div>

        <hr style={{ margin: '2rem 0' }} />

        <div>
          <h3>The Graph Endpoint (for Querying Data)</h3>
          <input id="graph-url" type="text" value={graphUrlInput} onChange={(e) => setGraphUrlInput(e.target.value)} placeholder="https://gateway.thegraph.com/api/[YOUR_KEY]/subgraphs/id/[SUBGRAPH_ID]" style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }} />
          <button onClick={handleGraphSave} style={{ padding: '10px 15px' }}>Save Graph Endpoint</button>
          {isGraphSaved && <span style={{ color: 'green', marginLeft: '10px' }}>Settings Saved!</span>}
        </div>
        
        <hr style={{ margin: '2rem 0' }} />

        <div>
          <h3>Contract Addresses (for Wagmi Hooks)</h3>
          <p>Provide custom contract addresses to read data from.</p>
          
          <label htmlFor="token-address" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nouns Token Address:</label>
          <input id="token-address" type="text" value={tokenInput} onChange={(e) => setTokenInput(e.target.value)} placeholder="0x..." style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }} />
          <button onClick={handleTokenSave} style={{ padding: '10px 15px', marginRight: '10px' }}>Save</button>
          <button onClick={handleTokenReset} style={{ padding: '10px 15px', backgroundColor: '#6c757d' }}>Reset</button>
          {tokenMessage && <p style={{ color: tokenMessage.startsWith('❌') ? 'red' : 'green', marginTop: '10px' }}>{tokenMessage}</p>}
          <p style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>Default for this chain: <code>{defaultNounsTokenAddress}</code></p>
          
          <hr style={{ margin: '2rem 0', borderStyle: 'dashed' }} />

          <label htmlFor="auction-house-address" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nouns Auction House Address:</label>
          <input id="auction-house-address" type="text" value={auctionHouseInput} onChange={(e) => setAuctionHouseInput(e.target.value)} placeholder="0x..." style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }} />
          <button onClick={handleAuctionHouseSave} style={{ padding: '10px 15px', marginRight: '10px' }}>Save</button>
          <button onClick={handleAuctionHouseReset} style={{ padding: '10px 15px', backgroundColor: '#6c757d' }}>Reset</button>
          {auctionHouseMessage && <p style={{ color: auctionHouseMessage.startsWith('❌') ? 'red' : 'green', marginTop: '10px' }}>{auctionHouseMessage}</p>}
          <p style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>Default for this chain: <code>{defaultAuctionHouseAddress}</code></p>
        </div>
      </div>
    </div>
  );
};