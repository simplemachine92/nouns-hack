// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// --- Sanity Check ---
// Make sure the API key is loaded. If not, the process will fail with a clear error.
if (!process.env.GRAPHQL_API_KEY) {
  throw new Error('GRAPHQL_API_KEY is not defined in your .env file');
}

const config: CodegenConfig = {
  schema: `https://gateway.thegraph.com/api/${process.env.GRAPHQL_API_KEY}/subgraphs/id/5qcR6rAfDMZCVGuZ6DDois7y4zyXqsyqvaqhE6NRRraW`,
  documents: ['src/**/*.tsx'], // Look for queries in your components
  ignoreNoDocuments: false,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  },
};

export default config;