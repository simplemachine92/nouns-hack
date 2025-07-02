// src/lib/graphqlClient.ts

import { GraphQLClient } from 'graphql-request';

// The public API endpoint for the Nouns subgraph on Arbitrum.
// For production apps, you would get an API key from The Graph Studio.
const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/id/5qcR6rAfDMZCVGuZ6DDois7y4zyXqsyqvaqhE6NRRraW';

export const graphqlClient = new GraphQLClient(SUBGRAPH_URL);