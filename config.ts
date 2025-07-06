// src/config.ts

import { mainnet } from 'viem/chains';

// Set your project's default chain.
export const DEFAULT_CHAIN = mainnet;

/**
 * A simple utility to create a block explorer link for an address.
 * @param address The address to link to.
 * @returns The full URL to the address on the default block explorer.
 */
export function buildExplorerLink(address: string): string {
  if (!DEFAULT_CHAIN.blockExplorers?.default.url) {
    return '#'; // Return a fallback if no explorer is configured
  }
  return `${DEFAULT_CHAIN.blockExplorers.default.url}/address/${address}`;
}