// src/components/AuctionActivity.tsx
import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { Noun } from './NounsDisplay';
import { Countdown } from './Countdown';
import { BidInterface } from './BidInterface';
import { useEnsName, useReadContracts } from 'wagmi';
import { nounsTokenAbi } from '../contracts/nouns-token.gen';
import { useConfigurableContracts } from '../contexts/ConfigurableContractProvider';
import { GetLatestAuctionsQuery, GetLatestAuctionsQueryVariables } from '../gql/graphql';
import { latestAuctionsQuery } from '../lib/subgraph';
import { getNounData, ImageData } from '@noundry/nouns-assets';
import { buildSVG } from '@nouns/sdk';
import { AuctionActivitySkeleton } from './AuctionActivitySkeleton';
import makeBlockie from 'ethereum-blockies-base64';


// --- STYLES (No changes needed) ---
const styles: { [key: string]: React.CSSProperties } = {
  activityContainer: { backgroundColor: '#F7F7F7', borderRadius: '16px', padding: '24px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif', color: '#111827' },
  navigator: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  navControls: { display: 'flex', alignItems: 'center', gap: '8px' },
  navButton: { border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', backgroundColor: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#4B5563' },
  navButtonDisabled: { cursor: 'not-allowed', backgroundColor: '#F3F4F6', color: '#9CA3AF' },
  navDate: { fontSize: '14px', color: '#6B7280', fontWeight: 500 },
  title: { fontSize: '48px', fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.1 },
  nounContainer: { marginBottom: '24px', borderRadius: '12px', overflow: 'hidden'},
  auctionInfoContainer: { display: 'flex', paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid #E5E7EB' },
  infoBlock: { flex: 1 },
  infoLabel: { fontSize: '14px', color: '#6B7280', marginBottom: '4px' },
  infoValue: { fontSize: '28px', fontWeight: 700, color: '#111827' },
  separator: { width: '1px', backgroundColor: '#E5E7EB', margin: '0 24px' },
  bidList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  bidItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  bidderInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  // bidderAvatar style is no longer used but kept for potential fallbacks
  bidderAvatar: { width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#E5E7EB' },
  bidderName: { color: '#111827', textDecoration: 'none', fontWeight: 500, fontSize: '16px' },
  bidAmountContainer: { display: 'flex', alignItems: 'center', gap: '8px' },
  ethAmount: { fontWeight: 500, fontSize: '16px' },
  externalLinkIcon: { fontSize: '14px', color: '#9CA3AF', textDecoration: 'none' },
  viewAllBids: { textAlign: 'center' as const, marginTop: '24px', color: '#6B7280', fontWeight: 500, fontSize: '14px', cursor: 'pointer' },
  wonByContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    marginBottom: '16px',
    fontSize: '16px',
    color: '#6B7280', // "Won by" and "for" text color
  },
  wonByAddress: {
    color: '#111827', // Darker color for address and amount
    fontWeight: 500,
    textDecoration: 'none',
  },
  addressLink: { color: '#111827', fontWeight: 600, textDecoration: 'none' },
};

// --- INTERFACES and HELPER COMPONENTS ---
interface ProcessedBid { sender: `0x${string}`; value: string; transactionHash: string; blockTimestamp: number; }
interface ProcessedAuction { nounId: string; endTime: number; winner?: `0x${string}`; amount: string; settled: boolean; bids: ProcessedBid[]; }
const EthAmount = ({ eth, style }: { eth: string; style?: React.CSSProperties }) => <span style={style}>Ξ {Number(Number(eth) / 1e18).toFixed(2)}</span>;

// NEW: A dedicated component for the blockie avatar
const BlockieAvatar = ({ address, size }: { address: `0x${string}`; size: number }) => {
  const blockieDataUrl = makeBlockie(address);
  return (
    <img 
      src={blockieDataUrl} 
      alt={`Blockie for ${address}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        borderRadius: '50%' 
      }} 
    />
  );
};

const AddressDisplay = ({ address, style }: { address: `0x${string}`; style?: React.CSSProperties }) => {
  const { data: ensName } = useEnsName({ address });
  const explorerUrl = `https://etherscan.io/address/${address}`;
  const displayName = ensName || `${address.slice(0, 6)}...${address.slice(-4)}`;
  return <a href={explorerUrl} target="_blank" rel="noopener noreferrer" style={style}>{displayName}</a>;
};

// --- AUCTION DETAIL VIEW (UPDATED to use Blockies) ---
const AuctionDetailView = ({ auction, preloadedDataUrl, onBidSuccess }: { auction: ProcessedAuction; preloadedDataUrl?: string; onBidSuccess: () => void; }) => (
  <div>
    <h2 style={styles.title}>Noun {auction.nounId}</h2>
    <div style={styles.nounContainer}>
      <Noun nounId={BigInt(auction.nounId)} preloadedDataUrl={preloadedDataUrl} loadingTransitionDelay={0} />
    </div>
    {auction.settled && auction.winner ? (
      <div style={styles.wonByContainer}>
        Won by{' '}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginLeft: '4px' }}>
          <BlockieAvatar address={auction.winner} size={24} />
          <AddressDisplay address={auction.winner} style={styles.wonByAddress} />
        </span>
        {' '}for <EthAmount eth={auction.amount} style={{...styles.wonByAddress}} />
      </div>
    ) : (
      <>
        <div style={styles.auctionInfoContainer}>
          <div style={styles.infoBlock}><div style={styles.infoLabel}>Current bid</div><EthAmount eth={auction.amount} style={styles.infoValue} /></div>
          <div style={styles.separator}></div>
          <div style={styles.infoBlock}><div style={styles.infoLabel}>Auction ends in</div><Countdown endTime={auction.endTime} /></div>
        </div>
        <BidInterface auctionId={BigInt(auction.nounId)} currentBid={auction.amount} onBidSuccess={onBidSuccess} />
      </>
    )}
    <div style={styles.bidList}>
      {auction.bids.slice(0, 3).map((bid) => (
        <div key={bid.transactionHash} style={styles.bidItem}>
          <div style={styles.bidderInfo}>
            <BlockieAvatar address={bid.sender} size={24} />
            <AddressDisplay address={bid.sender} style={styles.bidderName} />
          </div>
          <div style={styles.bidAmountContainer}><EthAmount eth={bid.value} style={styles.ethAmount} /><a href={`https://etherscan.io/tx/${bid.transactionHash}`} target="_blank" rel="noopener noreferrer" style={styles.externalLinkIcon}>↗</a></div>
        </div>
      ))}
    </div>
    {auction.bids.length === 0 && !auction.settled && <p style={{...styles.viewAllBids, cursor: 'default'}}>No bids yet.</p>}
  </div>
);

// --- MAIN EXPORTED COMPONENT (No changes needed here) ---
export const AuctionActivity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { nounsTokenAddress } = useConfigurableContracts();
  
  const { data, loading, error, refetch } = useQuery<GetLatestAuctionsQuery, GetLatestAuctionsQueryVariables>(
    latestAuctionsQuery, { variables: { first: 25 }, fetchPolicy: 'cache-and-network', notifyOnNetworkStatusChange: true }
  );
  
  const processedAuctions = useMemo((): ProcessedAuction[] => {
    if (!data?.auctions) return [];
    return data.auctions.map(auction => ({
      nounId: auction.id, endTime: Number(auction.endTime), amount: auction.amount, settled: auction.settled,
      winner: auction.bidder?.id ? (auction.bidder.id as `0x${string}`) : undefined,
      bids: [...auction.bids].sort((a, b) => Number(b.blockTimestamp) - Number(a.blockTimestamp)).flatMap(bid => {
        if (!bid.bidder?.id || !bid.txHash) return [];
        return [{ sender: bid.bidder.id as `0x${string}`, value: bid.amount, transactionHash: bid.txHash, blockTimestamp: Number(bid.blockTimestamp) }];
      }),
    }));
  }, [data]);

  const seedsContractCalls = useMemo(() => {
    return processedAuctions.map(auction => ({
      abi: nounsTokenAbi, address: nounsTokenAddress, functionName: 'seeds', args: [BigInt(auction.nounId)],
    } as const));
  }, [processedAuctions, nounsTokenAddress]);

  const { data: seedsResults, isLoading: areSeedsLoading } = useReadContracts({
    contracts: seedsContractCalls, query: { enabled: seedsContractCalls.length > 0 },
  });

  const preloadedNouns = useMemo(() => {
    const nounDataMap = new Map<string, string>();
    if (!seedsResults || areSeedsLoading) return nounDataMap;
    seedsResults.forEach((seedResult, index) => {
      const auction = processedAuctions[index];
      if (auction && seedResult.status === 'success' && seedResult.result) {
        const rawSeed = seedResult.result as readonly [number, number, number, number, number];
        const seed = { background: rawSeed[0], body: rawSeed[1], accessory: rawSeed[2], head: rawSeed[3], glasses: rawSeed[4] };
        const { parts, background } = getNounData(seed);
        const svg = buildSVG(parts, ImageData.palette, background);
        const dataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
        nounDataMap.set(auction.nounId, dataUrl);
      }
    });
    return nounDataMap;
  }, [seedsResults, areSeedsLoading, processedAuctions]);

  const handlePrevious = () => setCurrentIndex(prev => Math.min(processedAuctions.length - 1, prev + 1));
  const handleNext = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  
  if ((loading && !data) || (areSeedsLoading && preloadedNouns.size === 0 && processedAuctions.length > 0)) {
    return <AuctionActivitySkeleton/>;
  }
  if (error) {
    console.error(error);
    return <AuctionActivitySkeleton/>;
  }
  if (!processedAuctions.length) return <div>No auction data found.</div>;

  const currentAuction = processedAuctions[currentIndex];

  return (
    <div style={styles.activityContainer}>
      <div style={styles.navigator}>
        <div style={styles.navControls}>
          <button onClick={handlePrevious} disabled={currentIndex >= processedAuctions.length - 1} style={{...styles.navButton, ...(currentIndex >= processedAuctions.length - 1 && styles.navButtonDisabled)}}>←</button>
          <button onClick={handleNext} disabled={currentIndex === 0} style={{...styles.navButton, ...(currentIndex === 0 && styles.navButtonDisabled)}}>→</button>
        </div>
        <div style={styles.navDate}>
          {currentAuction.settled ? 'Ended' : 'Ends'} on {format(new Date(currentAuction.endTime * 1000), 'MMMM dd, yyyy')}
        </div>
      </div>
      <AuctionDetailView
        auction={currentAuction}
        preloadedDataUrl={preloadedNouns.get(currentAuction.nounId)}
        onBidSuccess={() => refetch()}
      />
    </div>
  );
};