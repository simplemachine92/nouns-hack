// src/lib/apolloClient.ts

import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

// The only job of this file is to export the factory function.
export const clientFactory = (uri: string) => {
  // BigInt patch logic - this part is correct.
  if (
    typeof BigInt !== 'undefined' &&
    !(BigInt.prototype as any).toJSON
  ) {
    (BigInt.prototype as any).toJSON = function () {
      return this.toString();
    };
  }

  // This ApolloLink is a middleware that scrubs nested BigInts before they hit the cache.
  const scrubBigIntLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(result => {
      return JSON.parse(JSON.stringify(result, (_key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      ));
    });
  });

  return new ApolloClient({
    // The link chain is processed from left to right.
    link: ApolloLink.from([scrubBigIntLink, new HttpLink({ uri })]),
    cache: new InMemoryCache(),
  });
};