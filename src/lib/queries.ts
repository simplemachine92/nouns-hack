// src/lib/queries.ts

import { graphql } from '../gql'; // Import the gql function from your codegen output

/**
 * Fetches a settled auction and all of its bids in ascending order.
 * This is the primary query for the AuctionActivity component.
 * @param nounId The ID of the Noun whose auction activity to fetch.
 */
export const auctionActivityQueryDocument = graphql(`
  query AuctionActivity($nounId: ID!) {
    auctions(where: { noun: $nounId }, first: 1) {
      id
      amount
      startTime
      endTime
      winner {
        id
      }
      bids(orderBy: blockTimestamp, orderDirection: asc) {
        id
        amount
        bidder {
          id
        }
        blockNumber
        blockTimestamp
        txHash
      }
    }
  }
`);