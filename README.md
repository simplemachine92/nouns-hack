# Nouns-Forever

## Open-Source and Decentralized Nouns Auction Client made for the PL_Genesis: Modular Worlds Hackathon

[text](https://nounsforever.eth.limo/)

A configurable and reusable React component for viewing and interacting with Nouns-style on-chain auctions. This component fetches live auction data from user configured Graph, displays Noun SVGs, and allows users to place bids through wallet interactions powered by wagmi and user-defined RPC and contract addresses.

Features

    Auction Activity Feed: View the most recent auctions, including settled and active ones.

    Navigation: Easily cycle through previous and next auctions.

    Live Countdown: A real-time countdown timer for active auctions.

    Interactive Bidding: A functional interface to place bids on the current auction.

    Dynamic Configuration: Users can provide their own RPC, The Graph, and contract addresses via a settings UI.

    ENS & Blockies: Resolves ENS names and displays unique "Blockie" avatars for Ethereum addresses.

    On-Chain Data: Reads contract state (like minimum bid percentage) directly from the blockchain for accuracy.

Tech Stack

    Framework: React & TypeScript

    Web3 Interaction: wagmi for wallet connection, contract reads, and writes.

    Data Querying: @apollo/client for fetching data from The Graph.

    Noun Rendering: @nouns/sdk and @noundry/nouns-assets for generating Noun SVGs.

Prerequisites

    Node.js (v16 or later)

    npm or yarn

Installation
```
git clone <your-repo-url>
cd <your-repo-name>
```

```
npm install
```

Running the App

This project is a component library, meant to be integrated into a larger application that provides the necessary WagmiProvider and ApolloProvider.

To run it, ensure you have a root App.tsx file that sets up these providers.
Generated bash

```  
npm start
```

One of the key features of this project is its run-time configurability, managed through the User Settings panel. All settings are persisted in the browser's Local Storage.
User Settings Panel

    RPC Endpoint: Set a custom RPC URL for all wagmi interactions. This determines which network your wallet connects to and interacts with.

    The Graph Endpoint: Set the full URL for the subgraph you want to query auction data from.

    Nouns Token Address: Specify the contract address for the Nouns ERC721 token. This is used to fetch the Noun's visual seed.

    Nouns Auction House Address: Specify the contract address for the auction house. This is used to place bids and read auction configuration like the minimum bid increment.

Component Breakdown

    AuctionActivity.tsx: The primary smart component. It fetches all necessary data from The Graph and the blockchain, manages the current auction state, and renders the appropriate child components.

    BidInterface.tsx: A self-contained component that handles all user input for bidding. It reads the minimum bid increment from the contract, validates user input, and uses wagmi's useWriteContract hook to send the createBid transaction.

    NounsDisplay.tsx: A robust component for rendering Nouns. It can accept a pre-rendered SVG for performance, or it can fetch the Noun's seed from the contract itself and build the SVG on the fly. It includes a custom error state to guide users if the contract address is misconfigured.

    AuctionActivitySkeleton.tsx: A visual placeholder that mimics the layout of the main component. It uses a CSS shimmer animation and the animated skull GIF to create a pleasant loading experience.

    ConfigurableContractProvider.tsx: A React Context provider that holds the state for the Nouns Token and Nouns Auction House contract addresses. It allows any component in the application to access the currently configured addresses and provides functions to update them.

License

This project is licensed under the MIT License.