// src/components/AuctionActivity.tsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';

// Import the specific query from your central file
import { auctionQuery } from '../lib/subgraph';

// Import the generated types for the query and its variables
import { GetAuctionQuery, GetAuctionQueryVariables } from '../gql/graphql';


// ... (EthAmount and TransactionLink components remain the same) ...
const EthAmount = ({ ethAmount }: { ethAmount: string | bigint }) => {
    const formatted = Number(ethAmount) / 1e18;
    return <span>Ξ {formatted.toFixed(3)}</span>;
};


/* const TransactionLink = ({ hash, children }: { hash: string; children: React.ReactNode }) => (
    <a href={`https://arbiscan.io/tx/${hash}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
        {children}
    </a>
); */


interface AuctionActivityProps {
  nounId: number;
}

export const AuctionActivity = ({ nounId }: AuctionActivityProps) => {
  // Use Apollo's useQuery hook with the correct types and variables
  const { data, loading, error } = useQuery<GetAuctionQuery, GetAuctionQueryVariables>(
    auctionQuery, // Use the imported query document
    {
      variables: { id: String(nounId) }, // Use `id` as defined in the query
      skip: !nounId,
    }
  );

  if (loading) return <div>Loading activity...</div>;
  if (error) {
    console.error(error);
    return <div>Error loading activity. Please provide a Graph URL with API key.</div>;
  }

  // The data is now at `data.auction`, not `data.auctions[0]`
  const auction = data?.auction;

  // The original query didn't sort bids, so we do it client-side.
  const sortedBids = auction?.bids ? [...auction.bids].sort((a, b) => Number(a.blockNumber) - Number(b.blockNumber)) : [];

  if (!auction) return <div>No auction activity found for Noun {nounId}.</div>;

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Auction Activity for Noun {nounId}</h2>

      {/* Map over the newly sorted bids */}
      {sortedBids.map(bid => (
        <div key={bid.id} className="flex justify-between items-center p-2 border-b">
          <div>
            <p>
              {/* Bid # <a href={buildExplorerLink(bid.txIndex)} target="_blank" rel="noreferrer" className="font-mono text-sm">Bid Amount {bid.amount}</a> */}
            </p>
            <p className="text-xs text-gray-500">
              {format(new Date(Number(bid.blockNumber) * 1000), 'MMM d, yyyy, h:mm a')}
            </p>
          </div>
          <div className="text-right">
            <EthAmount ethAmount={bid.amount} />
            {/* <TransactionLink hash={bid.}>
                <span className="text-xs ml-2">[tx]</span>
            </TransactionLink> */}
          </div>
        </div>
      ))}
      
      {/* Ensure auction.winner exists before trying to render it */}
      {auction.startTime && (
        <div className="pt-4">
          <h3 className="font-bold">Auction Settled</h3>
          <p>
            Won by{/*  <a href={buildExplorerLink(auction.winner.id)} target="_blank" rel="noreferrer">{auction.winner.id}</a> for <EthAmount ethAmount={auction.amount} />. */}
          </p>
        </div>
      )}
    </div>
  );
};