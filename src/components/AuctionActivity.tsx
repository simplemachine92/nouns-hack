import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { latestAuctionsQuery } from '../lib/subgraph'; // Or wherever your queries are defined
import { GetLatestAuctionsQuery, GetLatestAuctionsQueryVariables } from '../gql/graphql';
import { buildExplorerLink } from '../../config'; // Corrected path
import { Noun } from './NounsDisplay';

// 2. Interfaces for the "clean" data. They define a strict contract.
interface ProcessedBid {
  nounId: string;
  sender: string;
  value: string;
  transactionHash: string;
  timestamp: string;
}

interface ProcessedAuction {
  nounId: string;
  endTime: string;
  winner?: { id: string }; // If winner exists, its id MUST be a string
  amount: string;
  settled: boolean;
  bids: ProcessedBid[];
}

// --- Helper Components ---
const EthAmount = ({ ethAmount }: { ethAmount: string | bigint }) => {
    const amountAsBigInt = typeof ethAmount === 'string' ? BigInt(ethAmount) : ethAmount;
    const formatted = Number(amountAsBigInt) / 1e18;
    return <span>Ξ {formatted.toFixed(3)}</span>;
};

const TransactionLink = ({ hash, children }: { hash: string; children: React.ReactNode }) => (
    <a href={`https://arbiscan.io/tx/${hash}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
        {children}
    </a>
);


// --- Main Component ---
export const AuctionActivity = () => {
  const { data, loading, error } = useQuery<GetLatestAuctionsQuery, GetLatestAuctionsQueryVariables>(
    latestAuctionsQuery,
    {
      variables: { first: 5 },
    }
  );

  // 3. Use `useMemo` to safely transform raw data into our clean structure
  const processedAuctions: ProcessedAuction[] = useMemo(() => {
    if (!data?.auctions) {
      return [];
    }

    return data.auctions.map(auction => {
      const bids: ProcessedBid[] = [...auction.bids]
        .sort((a, b) => Number(a.blockTimestamp) - Number(b.blockTimestamp))
        .flatMap(bid => {
          // If a bid is missing a bidder or txHash, skip it entirely.
          if (!bid.bidder?.id || !bid.txHash) {
            return []; // flatMap will remove this empty array from the result
          }

          // Otherwise, return a clean bid object in an array
          return [{
            nounId: auction.id,
            sender: bid.bidder.id, // Now guaranteed to be a string
            value: bid.amount,
            transactionHash: bid.txHash,
            timestamp: format(new Date(Number(bid.blockTimestamp) * 1000), 'h:mm:ss a'),
          }];
        });
      
      return {
        nounId: auction.id,
        endTime: format(new Date(Number(auction.endTime) * 1000), 'MMM d, yyyy, h:mm a'),
        
        // Only create the winner object if the auction is settled AND a winner ID exists.
        winner: (auction.settled && auction.bidder?.id) ? { id: auction.bidder.id } : undefined,
        
        amount: auction.amount,
        settled: auction.settled,
        bids: bids, // Assign the clean, filtered bids
      };
    });
  }, [data]);

  
  // --- Render Logic ---
  if (loading) return <div>Loading latest auction activity...</div>;
  if (error) {
    console.error(error);
    return <div>Error loading activity. Please check the console and your Graph URL settings.</div>;
  }
  if (processedAuctions.length === 0) return <div>No auction data found.</div>;

  return (
    <div className="space-y-8 p-4">
      {processedAuctions.map(auction => (
        <div key={auction.nounId} style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px' }}>
          <h2 className="text-2xl font-bold">Auction for Noun {auction.nounId}</h2>
          {/* <Noun
          nounId={BigInt(auction.nounId)} 
          /> */}
          <p className="text-sm text-gray-600">Ended on {auction.endTime}</p>

          <div className="mt-4">
            {auction.settled && auction.winner && (
            <div className="mt-4 pt-4 border-t">
              <h3 className="font-bold text-green-600">Auction Settled</h3>
              <p>
                Won by <a href={buildExplorerLink(auction.winner.id)} target="_blank" rel="noreferrer" className="font-semibold">{auction.winner.id}</a> for <EthAmount ethAmount={auction.amount} />.
              </p>
            </div>
          )}
            <h3 className="font-semibold text-lg mb-2">Bids</h3>
            {auction.bids.map(bid => (
              <div key={bid.transactionHash} className="flex justify-between items-center p-2 border-b last:border-b-0">
                <div>
                  <p>
                    Bid by <a href={buildExplorerLink(bid.sender)} target="_blank" rel="noreferrer" className="font-mono text-sm hover:text-blue-700">{bid.sender}</a>
                  </p>
                  <p className="text-xs text-gray-500">at {bid.timestamp}</p>
                </div>
                <div className="text-right">
                  <EthAmount ethAmount={bid.value} />
                  <TransactionLink hash={bid.transactionHash}>
                      <span className="text-xs ml-2">[tx]</span>
                  </TransactionLink>
                </div>
              </div>
            ))}
          </div>

          {auction.settled && auction.winner && (
            <div className="mt-4 pt-4 border-t">
              <h3 className="font-bold text-green-600">Auction Settled</h3>
              <p>
                Won by <a href={buildExplorerLink(auction.winner.id)} target="_blank" rel="noreferrer" className="font-semibold">{auction.winner.id}</a> for <EthAmount ethAmount={auction.amount} />.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};