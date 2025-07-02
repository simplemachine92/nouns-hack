// src/App.tsx

import { AuctionActivity } from './components/AuctionActivity';
import { SettingsPage } from './components/SettingsPage';

function App() {
  const nounIdToTest = 25;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        Testing Auction Activity
      </h1>
      <AuctionActivity nounId={nounIdToTest} />
      <SettingsPage />
    </div>
  );
}

export default App;