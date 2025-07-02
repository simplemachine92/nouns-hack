// src/components/SettingsPage.tsx

import { useState } from 'react';
import { useConfigurableApolloClient } from '../contexts/ConfigurableApolloProvider';

export const SettingsPage = () => {
  const { setGraphUrl, currentGraphUrl } = useConfigurableApolloClient();
  const [inputValue, setInputValue] = useState(currentGraphUrl);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (inputValue.trim()) {
      setGraphUrl(inputValue);
      setIsSaved(true);
      // Let the user know it's saved. The app will update automatically.
      setTimeout(() => setIsSaved(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '20px', borderRadius: '8px' }}>
      <h2 style={{ marginTop: '0' }}>Decentralized Settings</h2>
      <p>Provide your own The Graph endpoint to control your data source.</p>
      <label htmlFor="graph-url" style={{ display: 'block', marginBottom: '8px' }}>
        The Graph URL (with API Key):
      </label>
      <input
        id="graph-url"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="https://gateway.thegraph.com/api/..."
        style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
      />
      <button onClick={handleSave} style={{ padding: '10px 15px' }}>
        Save
      </button>
      {isSaved && <span style={{ color: 'green', marginLeft: '10px' }}>Settings Saved! Data is refetching...</span>}
    </div>
  );
};