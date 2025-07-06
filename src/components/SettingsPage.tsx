// src/components/SettingsPage.tsx
import React, { useState } from 'react';
import { isAddress } from 'viem';
import { useConfigurableApolloClient } from '../contexts/ConfigurableApolloProvider';
import { useConfigurableContracts } from '../contexts/ConfigurableContractProvider'

// Props for the RPC settings passed down from App.tsx
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
  // --- State & Logic for The Graph Endpoint ---
  const { setGraphUrl, currentGraphUrl } = useConfigurableApolloClient();
  const [graphUrlInput, setGraphUrlInput] = useState(currentGraphUrl);
  const [isGraphSaved, setIsGraphSaved] = useState(false);

  // --- State & Logic for Contract Address ---
  const { contractAddress, setContractAddress, defaultAddress } = useConfigurableContracts();
  const [contractInput, setContractInput] = useState<string>(contractAddress);
  const [contractMessage, setContractMessage] = useState('');

  const handleGraphSave = () => {
    if (graphUrlInput.trim()) {
      setGraphUrl(graphUrlInput);
      setIsGraphSaved(true);
      setTimeout(() => setIsGraphSaved(false), 3000);
    }
  };

  const handleContractSave = () => {
    if (isAddress(contractInput)) {
      setContractAddress(contractInput);
      setContractMessage('✅ Address saved successfully!');
    } else {
      setContractMessage('❌ Invalid Ethereum address.');
    }
    setTimeout(() => setContractMessage(''), 3000);
  };

  const handleContractReset = () => {
    setContractAddress(defaultAddress);
    setContractInput(defaultAddress);
    setContractMessage('✅ Address reset to default for the current chain.');
    setTimeout(() => setContractMessage(''), 3000);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '20px', borderRadius: '8px' }}>
      <h2 style={{ marginTop: '0' }}>Application Settings</h2>

      {/* --- Section 1: Wagmi RPC Configuration --- */}
      <div>
        <h3>RPC Endpoint (for Wallet Connection)</h3>
        <p>Provide your own custom RPC endpoint for wallet interactions and balance fetching.</p>
        <label htmlFor="rpc-url" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Custom RPC URL:
        </label>
        <input
          id="rpc-url"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="https://mainnet.infura.io/v3/..."
          style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }}
        />
        <button onClick={handleApplyRpc} style={{ padding: '10px 15px' }}>
          Apply RPC
        </button>
        <p style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>
          Currently using: <code>{activeRpcUrl}</code>
        </p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* --- Section 2: The Graph Configuration --- */}
      <div>
        <h3>The Graph Endpoint (for Querying Data)</h3>
        <p>Provide your own The Graph endpoint to control your data source.</p>
        <label htmlFor="graph-url" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          The Graph URL (with API Key):
        </label>
        <input
          id="graph-url"
          type="text"
          value={graphUrlInput}
          onChange={(e) => setGraphUrlInput(e.target.value)}
          placeholder="https://gateway.thegraph.com/api/..."
          style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }}
        />
        <button onClick={handleGraphSave} style={{ padding: '10px 15px' }}>
          Save Graph Endpoint
        </button>
        {isGraphSaved && <span style={{ color: 'green', marginLeft: '10px' }}>Settings Saved! Data is refetching...</span>}
      </div>
      
      <hr style={{ margin: '2rem 0' }} />

      {/* --- Section 3: Contract Address Configuration --- */}
      <div>
        <h3>Contract Address (for Wagmi Hooks)</h3>
        <p>Provide a custom NounsToken contract address to read data from.</p>
        <label htmlFor="contract-address" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          NounsToken Contract Address:
        </label>
        <input
          id="contract-address"
          type="text"
          value={contractInput}
          onChange={(e) => setContractInput(e.target.value)}
          placeholder="0x..."
          style={{ width: 'calc(100% - 18px)', padding: '8px', marginBottom: '16px' }}
        />
        <button onClick={handleContractSave} style={{ padding: '10px 15px', marginRight: '10px' }}>
          Save Address
        </button>
        <button onClick={handleContractReset} style={{ padding: '10px 15px', backgroundColor: '#6c757d' }}>
          Reset to Default
        </button>
        {contractMessage && <p style={{ color: contractMessage.startsWith('❌') ? 'red' : 'green', marginTop: '10px' }}>{contractMessage}</p>}
        <p style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>
          Default for this chain: <code>{defaultAddress}</code>
        </p>
      </div>
    </div>
  );
};