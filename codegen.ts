// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://gateway.thegraph.com/api/subgraphs/id/5qcR6rAfDMZCVGuZ6DDois7y4zyXqsyqvaqhE6NRRraW': {
        headers: {
          Authorization: 'YOUR-TOKEN-HERE',
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'], // Look for queries in your components
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  },
};

export default config;