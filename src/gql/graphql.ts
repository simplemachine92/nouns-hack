/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  /** Delegate address of the token holder which will participate in votings. Delegates don't need to hold any tokens and can even be the token holder itself. */
  delegate?: Maybe<Delegate>;
  /** An Account is any address that holds any amount of Nouns, the id used is the blockchain address. */
  id: Scalars['ID']['output'];
  /** The Nouns owned by this account */
  nouns: Array<Noun>;
  /** Noun balance of this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  tokenBalance: Scalars['BigInt']['output'];
  /** Noun balance of this address expressed in the smallest unit of the Nouns ERC721 Token */
  tokenBalanceRaw: Scalars['BigInt']['output'];
  /** Total amount of Nouns ever held by this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  totalTokensHeld: Scalars['BigInt']['output'];
  /** Total amount of Nouns ever held by this address expressed in the smallest unit of the Nouns ERC721 Token */
  totalTokensHeldRaw: Scalars['BigInt']['output'];
};


export type AccountNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Noun_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Delegate_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nouns?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_?: InputMaybe<Noun_Filter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  tokenBalance?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalanceRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeldRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Account_OrderBy {
  Delegate = 'delegate',
  DelegateDelegatedVotes = 'delegate__delegatedVotes',
  DelegateDelegatedVotesRaw = 'delegate__delegatedVotesRaw',
  DelegateId = 'delegate__id',
  DelegateTokenHoldersRepresentedAmount = 'delegate__tokenHoldersRepresentedAmount',
  Id = 'id',
  Nouns = 'nouns',
  TokenBalance = 'tokenBalance',
  TokenBalanceRaw = 'tokenBalanceRaw',
  TotalTokensHeld = 'totalTokensHeld',
  TotalTokensHeldRaw = 'totalTokensHeldRaw'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Auction = {
  __typename?: 'Auction';
  /** The current highest bid amount */
  amount: Scalars['BigInt']['output'];
  /** The account with the current highest bid */
  bidder?: Maybe<Account>;
  /** The auction bids */
  bids: Array<Bid>;
  clientId: Scalars['Int']['output'];
  /** The time that the auction is scheduled to end */
  endTime: Scalars['BigInt']['output'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
  /** The Noun */
  noun: Noun;
  /** Whether or not the auction has been settled */
  settled: Scalars['Boolean']['output'];
  /** The time that the auction started */
  startTime: Scalars['BigInt']['output'];
};


export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Bid_Filter>;
};

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  bidder?: InputMaybe<Scalars['String']['input']>;
  bidder_?: InputMaybe<Account_Filter>;
  bidder_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_gt?: InputMaybe<Scalars['String']['input']>;
  bidder_gte?: InputMaybe<Scalars['String']['input']>;
  bidder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_lt?: InputMaybe<Scalars['String']['input']>;
  bidder_lte?: InputMaybe<Scalars['String']['input']>;
  bidder_not?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bids_?: InputMaybe<Bid_Filter>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientId_gt?: InputMaybe<Scalars['Int']['input']>;
  clientId_gte?: InputMaybe<Scalars['Int']['input']>;
  clientId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clientId_lt?: InputMaybe<Scalars['Int']['input']>;
  clientId_lte?: InputMaybe<Scalars['Int']['input']>;
  clientId_not?: InputMaybe<Scalars['Int']['input']>;
  clientId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  settled?: InputMaybe<Scalars['Boolean']['input']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  settled_not?: InputMaybe<Scalars['Boolean']['input']>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Auction_OrderBy {
  Amount = 'amount',
  Bidder = 'bidder',
  BidderId = 'bidder__id',
  BidderTokenBalance = 'bidder__tokenBalance',
  BidderTokenBalanceRaw = 'bidder__tokenBalanceRaw',
  BidderTotalTokensHeld = 'bidder__totalTokensHeld',
  BidderTotalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  Bids = 'bids',
  ClientId = 'clientId',
  EndTime = 'endTime',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  Settled = 'settled',
  StartTime = 'startTime'
}

export type Bid = {
  __typename?: 'Bid';
  /** Bid amount */
  amount: Scalars['BigInt']['output'];
  /** The auction being bid in */
  auction: Auction;
  /** Bidder account */
  bidder?: Maybe<Account>;
  /** Block number of the bid */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the bid is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** The ID of the client that facilitated this bid */
  clientId?: Maybe<Scalars['Int']['output']>;
  /** Noun.id-amount */
  id: Scalars['ID']['output'];
  /** The Noun being bid on */
  noun: Noun;
  /** Transaction has for the bid */
  txHash: Scalars['Bytes']['output'];
  /** Index of transaction within block */
  txIndex: Scalars['BigInt']['output'];
};

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder?: InputMaybe<Scalars['String']['input']>;
  bidder_?: InputMaybe<Account_Filter>;
  bidder_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_gt?: InputMaybe<Scalars['String']['input']>;
  bidder_gte?: InputMaybe<Scalars['String']['input']>;
  bidder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_lt?: InputMaybe<Scalars['String']['input']>;
  bidder_lte?: InputMaybe<Scalars['String']['input']>;
  bidder_not?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientId_gt?: InputMaybe<Scalars['Int']['input']>;
  clientId_gte?: InputMaybe<Scalars['Int']['input']>;
  clientId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clientId_lt?: InputMaybe<Scalars['Int']['input']>;
  clientId_lte?: InputMaybe<Scalars['Int']['input']>;
  clientId_not?: InputMaybe<Scalars['Int']['input']>;
  clientId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txIndex?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Bid_OrderBy {
  Amount = 'amount',
  Auction = 'auction',
  AuctionAmount = 'auction__amount',
  AuctionClientId = 'auction__clientId',
  AuctionEndTime = 'auction__endTime',
  AuctionId = 'auction__id',
  AuctionSettled = 'auction__settled',
  AuctionStartTime = 'auction__startTime',
  Bidder = 'bidder',
  BidderId = 'bidder__id',
  BidderTokenBalance = 'bidder__tokenBalance',
  BidderTokenBalanceRaw = 'bidder__tokenBalanceRaw',
  BidderTotalTokensHeld = 'bidder__totalTokensHeld',
  BidderTotalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClientId = 'clientId',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  TxHash = 'txHash',
  TxIndex = 'txIndex'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CandidateFeedback = {
  __typename?: 'CandidateFeedback';
  /** The proposal candidate this feedback is provided on */
  candidate: ProposalCandidate;
  /** The feedback's creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** This feedback's creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID']['output'];
  /** The optional feedback reason free text */
  reason?: Maybe<Scalars['String']['output']>;
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int']['output'];
  /** The voter account providing the feedback */
  voter: Delegate;
  /** Amount of votes voter had when feedback was submitted */
  votes: Scalars['BigInt']['output'];
};

export type CandidateFeedback_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CandidateFeedback_Filter>>>;
  candidate?: InputMaybe<Scalars['String']['input']>;
  candidate_?: InputMaybe<ProposalCandidate_Filter>;
  candidate_contains?: InputMaybe<Scalars['String']['input']>;
  candidate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  candidate_ends_with?: InputMaybe<Scalars['String']['input']>;
  candidate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  candidate_gt?: InputMaybe<Scalars['String']['input']>;
  candidate_gte?: InputMaybe<Scalars['String']['input']>;
  candidate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  candidate_lt?: InputMaybe<Scalars['String']['input']>;
  candidate_lte?: InputMaybe<Scalars['String']['input']>;
  candidate_not?: InputMaybe<Scalars['String']['input']>;
  candidate_not_contains?: InputMaybe<Scalars['String']['input']>;
  candidate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  candidate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  candidate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  candidate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  candidate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  candidate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  candidate_starts_with?: InputMaybe<Scalars['String']['input']>;
  candidate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CandidateFeedback_Filter>>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supportDetailed?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum CandidateFeedback_OrderBy {
  Candidate = 'candidate',
  CandidateCanceled = 'candidate__canceled',
  CandidateCanceledBlock = 'candidate__canceledBlock',
  CandidateCanceledTimestamp = 'candidate__canceledTimestamp',
  CandidateCreatedBlock = 'candidate__createdBlock',
  CandidateCreatedTimestamp = 'candidate__createdTimestamp',
  CandidateCreatedTransactionHash = 'candidate__createdTransactionHash',
  CandidateId = 'candidate__id',
  CandidateLastUpdatedBlock = 'candidate__lastUpdatedBlock',
  CandidateLastUpdatedTimestamp = 'candidate__lastUpdatedTimestamp',
  CandidateNumber = 'candidate__number',
  CandidateProposer = 'candidate__proposer',
  CandidateSlug = 'candidate__slug',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  Id = 'id',
  Reason = 'reason',
  SupportDetailed = 'supportDetailed',
  Voter = 'voter',
  VoterDelegatedVotes = 'voter__delegatedVotes',
  VoterDelegatedVotesRaw = 'voter__delegatedVotesRaw',
  VoterId = 'voter__id',
  VoterTokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  Votes = 'votes'
}

export type Delegate = {
  __typename?: 'Delegate';
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt']['output'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt']['output'];
  /** A Delegate is any address that has been delegated with voting tokens by a token holder, id is the blockchain address of said delegate */
  id: Scalars['ID']['output'];
  /** Nouns that this delegate represents */
  nounsRepresented: Array<Noun>;
  /** Proposals that the delegate has created */
  proposals: Array<Proposal>;
  /** Token holders that this delegate represents */
  tokenHoldersRepresented: Array<Account>;
  tokenHoldersRepresentedAmount: Scalars['Int']['output'];
  /** Votes that a delegate has made in different proposals */
  votes: Array<Vote>;
};


export type DelegateNounsRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Noun_Filter>;
};


export type DelegateProposalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Proposal_Filter>;
};


export type DelegateTokenHoldersRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Account_Filter>;
};


export type DelegateVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Delegate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegate_Filter>>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nounsRepresented?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_?: InputMaybe<Noun_Filter>;
  nounsRepresented_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Delegate_Filter>>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  tokenHoldersRepresentedAmount?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenHoldersRepresentedAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_not?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenHoldersRepresented_?: InputMaybe<Account_Filter>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Delegate_OrderBy {
  DelegatedVotes = 'delegatedVotes',
  DelegatedVotesRaw = 'delegatedVotesRaw',
  Id = 'id',
  NounsRepresented = 'nounsRepresented',
  Proposals = 'proposals',
  TokenHoldersRepresented = 'tokenHoldersRepresented',
  TokenHoldersRepresentedAmount = 'tokenHoldersRepresentedAmount',
  Votes = 'votes'
}

export type DelegationEvent = {
  __typename?: 'DelegationEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** Current delegator address */
  delegator: Account;
  /** The txn hash of this event + nounId */
  id: Scalars['ID']['output'];
  /** New delegate address */
  newDelegate: Delegate;
  /** The Noun being delegated */
  noun: Noun;
  /** Previous delegate address */
  previousDelegate: Delegate;
};

export type DelegationEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Account_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newDelegate?: InputMaybe<Scalars['String']['input']>;
  newDelegate_?: InputMaybe<Delegate_Filter>;
  newDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<DelegationEvent_Filter>>>;
  previousDelegate?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_?: InputMaybe<Delegate_Filter>;
  previousDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DelegationEvent_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Delegator = 'delegator',
  DelegatorId = 'delegator__id',
  DelegatorTokenBalance = 'delegator__tokenBalance',
  DelegatorTokenBalanceRaw = 'delegator__tokenBalanceRaw',
  DelegatorTotalTokensHeld = 'delegator__totalTokensHeld',
  DelegatorTotalTokensHeldRaw = 'delegator__totalTokensHeldRaw',
  Id = 'id',
  NewDelegate = 'newDelegate',
  NewDelegateDelegatedVotes = 'newDelegate__delegatedVotes',
  NewDelegateDelegatedVotesRaw = 'newDelegate__delegatedVotesRaw',
  NewDelegateId = 'newDelegate__id',
  NewDelegateTokenHoldersRepresentedAmount = 'newDelegate__tokenHoldersRepresentedAmount',
  Noun = 'noun',
  NounId = 'noun__id',
  PreviousDelegate = 'previousDelegate',
  PreviousDelegateDelegatedVotes = 'previousDelegate__delegatedVotes',
  PreviousDelegateDelegatedVotesRaw = 'previousDelegate__delegatedVotesRaw',
  PreviousDelegateId = 'previousDelegate__id',
  PreviousDelegateTokenHoldersRepresentedAmount = 'previousDelegate__tokenHoldersRepresentedAmount'
}

export type DynamicQuorumParams = {
  __typename?: 'DynamicQuorumParams';
  /** The block from which proposals are using DQ, based on when we first see configuration being set */
  dynamicQuorumStartBlock?: Maybe<Scalars['BigInt']['output']>;
  /** Unique entity used to store the latest dymanic quorum params */
  id: Scalars['ID']['output'];
  /** Max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int']['output'];
  /** Min quorum basis points */
  minQuorumVotesBPS: Scalars['Int']['output'];
  /** The dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt']['output'];
};

export type DynamicQuorumParams_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DynamicQuorumParams_Filter>>>;
  dynamicQuorumStartBlock?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dynamicQuorumStartBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DynamicQuorumParams_Filter>>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DynamicQuorumParams_OrderBy {
  DynamicQuorumStartBlock = 'dynamicQuorumStartBlock',
  Id = 'id',
  MaxQuorumVotesBps = 'maxQuorumVotesBPS',
  MinQuorumVotesBps = 'minQuorumVotesBPS',
  QuorumCoefficient = 'quorumCoefficient'
}

export type EscrowDeposit = {
  __typename?: 'EscrowDeposit';
  createdAt: Scalars['BigInt']['output'];
  fork: Fork;
  id: Scalars['ID']['output'];
  owner: Delegate;
  proposalIDs: Array<Scalars['BigInt']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  tokenIDs: Array<Scalars['BigInt']['output']>;
};

export type EscrowDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowDeposit_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fork?: InputMaybe<Scalars['String']['input']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']['input']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_gt?: InputMaybe<Scalars['String']['input']>;
  fork_gte?: InputMaybe<Scalars['String']['input']>;
  fork_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_lt?: InputMaybe<Scalars['String']['input']>;
  fork_lte?: InputMaybe<Scalars['String']['input']>;
  fork_not?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EscrowDeposit_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposalIDs?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum EscrowDeposit_OrderBy {
  CreatedAt = 'createdAt',
  Fork = 'fork',
  ForkExecuted = 'fork__executed',
  ForkExecutedAt = 'fork__executedAt',
  ForkForkId = 'fork__forkID',
  ForkForkToken = 'fork__forkToken',
  ForkForkTreasury = 'fork__forkTreasury',
  ForkForkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  ForkId = 'fork__id',
  ForkTokensForkingCount = 'fork__tokensForkingCount',
  ForkTokensInEscrowCount = 'fork__tokensInEscrowCount',
  Id = 'id',
  Owner = 'owner',
  OwnerDelegatedVotes = 'owner__delegatedVotes',
  OwnerDelegatedVotesRaw = 'owner__delegatedVotesRaw',
  OwnerId = 'owner__id',
  OwnerTokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  ProposalIDs = 'proposalIDs',
  Reason = 'reason',
  TokenIDs = 'tokenIDs'
}

export type EscrowWithdrawal = {
  __typename?: 'EscrowWithdrawal';
  createdAt: Scalars['BigInt']['output'];
  fork: Fork;
  id: Scalars['ID']['output'];
  owner: Delegate;
  tokenIDs: Array<Scalars['BigInt']['output']>;
};

export type EscrowWithdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowWithdrawal_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fork?: InputMaybe<Scalars['String']['input']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']['input']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_gt?: InputMaybe<Scalars['String']['input']>;
  fork_gte?: InputMaybe<Scalars['String']['input']>;
  fork_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_lt?: InputMaybe<Scalars['String']['input']>;
  fork_lte?: InputMaybe<Scalars['String']['input']>;
  fork_not?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EscrowWithdrawal_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum EscrowWithdrawal_OrderBy {
  CreatedAt = 'createdAt',
  Fork = 'fork',
  ForkExecuted = 'fork__executed',
  ForkExecutedAt = 'fork__executedAt',
  ForkForkId = 'fork__forkID',
  ForkForkToken = 'fork__forkToken',
  ForkForkTreasury = 'fork__forkTreasury',
  ForkForkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  ForkId = 'fork__id',
  ForkTokensForkingCount = 'fork__tokensForkingCount',
  ForkTokensInEscrowCount = 'fork__tokensInEscrowCount',
  Id = 'id',
  Owner = 'owner',
  OwnerDelegatedVotes = 'owner__delegatedVotes',
  OwnerDelegatedVotesRaw = 'owner__delegatedVotesRaw',
  OwnerId = 'owner__id',
  OwnerTokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  TokenIDs = 'tokenIDs'
}

export type EscrowedNoun = {
  __typename?: 'EscrowedNoun';
  escrowDeposit: EscrowDeposit;
  fork: Fork;
  id: Scalars['ID']['output'];
  noun: Noun;
  owner: Delegate;
};

export type EscrowedNoun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowedNoun_Filter>>>;
  escrowDeposit?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_?: InputMaybe<EscrowDeposit_Filter>;
  escrowDeposit_contains?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_ends_with?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_gt?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_gte?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_in?: InputMaybe<Array<Scalars['String']['input']>>;
  escrowDeposit_lt?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_lte?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_contains?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  escrowDeposit_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_starts_with?: InputMaybe<Scalars['String']['input']>;
  escrowDeposit_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork?: InputMaybe<Scalars['String']['input']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']['input']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_gt?: InputMaybe<Scalars['String']['input']>;
  fork_gte?: InputMaybe<Scalars['String']['input']>;
  fork_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_lt?: InputMaybe<Scalars['String']['input']>;
  fork_lte?: InputMaybe<Scalars['String']['input']>;
  fork_not?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<EscrowedNoun_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum EscrowedNoun_OrderBy {
  EscrowDeposit = 'escrowDeposit',
  EscrowDepositCreatedAt = 'escrowDeposit__createdAt',
  EscrowDepositId = 'escrowDeposit__id',
  EscrowDepositReason = 'escrowDeposit__reason',
  Fork = 'fork',
  ForkExecuted = 'fork__executed',
  ForkExecutedAt = 'fork__executedAt',
  ForkForkId = 'fork__forkID',
  ForkForkToken = 'fork__forkToken',
  ForkForkTreasury = 'fork__forkTreasury',
  ForkForkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  ForkId = 'fork__id',
  ForkTokensForkingCount = 'fork__tokensForkingCount',
  ForkTokensInEscrowCount = 'fork__tokensInEscrowCount',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  Owner = 'owner',
  OwnerDelegatedVotes = 'owner__delegatedVotes',
  OwnerDelegatedVotesRaw = 'owner__delegatedVotesRaw',
  OwnerId = 'owner__id',
  OwnerTokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount'
}

export type Fork = {
  __typename?: 'Fork';
  escrowDeposits: Array<EscrowDeposit>;
  escrowWithdrawals: Array<EscrowWithdrawal>;
  escrowedNouns: Array<EscrowedNoun>;
  executed?: Maybe<Scalars['Boolean']['output']>;
  executedAt?: Maybe<Scalars['BigInt']['output']>;
  /** The fork ID as int, to make it easier to query for the latest fork */
  forkID: Scalars['BigInt']['output'];
  forkToken?: Maybe<Scalars['Bytes']['output']>;
  forkTreasury?: Maybe<Scalars['Bytes']['output']>;
  forkingPeriodEndTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The fork ID given by the escrow contract */
  id: Scalars['ID']['output'];
  joinedNouns: Array<ForkJoinedNoun>;
  tokensForkingCount: Scalars['Int']['output'];
  tokensInEscrowCount: Scalars['Int']['output'];
};


export type ForkEscrowDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EscrowDeposit_Filter>;
};


export type ForkEscrowWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EscrowWithdrawal_Filter>;
};


export type ForkEscrowedNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EscrowedNoun_Filter>;
};


export type ForkJoinedNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ForkJoinedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ForkJoinedNoun_Filter>;
};

export type ForkJoin = {
  __typename?: 'ForkJoin';
  createdAt: Scalars['BigInt']['output'];
  fork: Fork;
  id: Scalars['ID']['output'];
  owner: Delegate;
  proposalIDs: Array<Scalars['BigInt']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  tokenIDs: Array<Scalars['BigInt']['output']>;
};

export type ForkJoin_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ForkJoin_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fork?: InputMaybe<Scalars['String']['input']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']['input']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_gt?: InputMaybe<Scalars['String']['input']>;
  fork_gte?: InputMaybe<Scalars['String']['input']>;
  fork_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_lt?: InputMaybe<Scalars['String']['input']>;
  fork_lte?: InputMaybe<Scalars['String']['input']>;
  fork_not?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ForkJoin_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposalIDs?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ForkJoin_OrderBy {
  CreatedAt = 'createdAt',
  Fork = 'fork',
  ForkExecuted = 'fork__executed',
  ForkExecutedAt = 'fork__executedAt',
  ForkForkId = 'fork__forkID',
  ForkForkToken = 'fork__forkToken',
  ForkForkTreasury = 'fork__forkTreasury',
  ForkForkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  ForkId = 'fork__id',
  ForkTokensForkingCount = 'fork__tokensForkingCount',
  ForkTokensInEscrowCount = 'fork__tokensInEscrowCount',
  Id = 'id',
  Owner = 'owner',
  OwnerDelegatedVotes = 'owner__delegatedVotes',
  OwnerDelegatedVotesRaw = 'owner__delegatedVotesRaw',
  OwnerId = 'owner__id',
  OwnerTokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  ProposalIDs = 'proposalIDs',
  Reason = 'reason',
  TokenIDs = 'tokenIDs'
}

export type ForkJoinedNoun = {
  __typename?: 'ForkJoinedNoun';
  fork: Fork;
  forkJoin: ForkJoin;
  id: Scalars['ID']['output'];
  noun: Noun;
  owner: Delegate;
};

export type ForkJoinedNoun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ForkJoinedNoun_Filter>>>;
  fork?: InputMaybe<Scalars['String']['input']>;
  forkJoin?: InputMaybe<Scalars['String']['input']>;
  forkJoin_?: InputMaybe<ForkJoin_Filter>;
  forkJoin_contains?: InputMaybe<Scalars['String']['input']>;
  forkJoin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  forkJoin_ends_with?: InputMaybe<Scalars['String']['input']>;
  forkJoin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  forkJoin_gt?: InputMaybe<Scalars['String']['input']>;
  forkJoin_gte?: InputMaybe<Scalars['String']['input']>;
  forkJoin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  forkJoin_lt?: InputMaybe<Scalars['String']['input']>;
  forkJoin_lte?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_contains?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  forkJoin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  forkJoin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  forkJoin_starts_with?: InputMaybe<Scalars['String']['input']>;
  forkJoin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']['input']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_gt?: InputMaybe<Scalars['String']['input']>;
  fork_gte?: InputMaybe<Scalars['String']['input']>;
  fork_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_lt?: InputMaybe<Scalars['String']['input']>;
  fork_lte?: InputMaybe<Scalars['String']['input']>;
  fork_not?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains?: InputMaybe<Scalars['String']['input']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with?: InputMaybe<Scalars['String']['input']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ForkJoinedNoun_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ForkJoinedNoun_OrderBy {
  Fork = 'fork',
  ForkJoin = 'forkJoin',
  ForkJoinCreatedAt = 'forkJoin__createdAt',
  ForkJoinId = 'forkJoin__id',
  ForkJoinReason = 'forkJoin__reason',
  ForkExecuted = 'fork__executed',
  ForkExecutedAt = 'fork__executedAt',
  ForkForkId = 'fork__forkID',
  ForkForkToken = 'fork__forkToken',
  ForkForkTreasury = 'fork__forkTreasury',
  ForkForkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  ForkId = 'fork__id',
  ForkTokensForkingCount = 'fork__tokensForkingCount',
  ForkTokensInEscrowCount = 'fork__tokensInEscrowCount',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  Owner = 'owner',
  OwnerDelegatedVotes = 'owner__delegatedVotes',
  OwnerDelegatedVotesRaw = 'owner__delegatedVotesRaw',
  OwnerId = 'owner__id',
  OwnerTokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount'
}

export type Fork_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Fork_Filter>>>;
  escrowDeposits_?: InputMaybe<EscrowDeposit_Filter>;
  escrowWithdrawals_?: InputMaybe<EscrowWithdrawal_Filter>;
  escrowedNouns_?: InputMaybe<EscrowedNoun_Filter>;
  executed?: InputMaybe<Scalars['Boolean']['input']>;
  executedAt?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  executedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  executed_not?: InputMaybe<Scalars['Boolean']['input']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  forkID?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forkID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_not?: InputMaybe<Scalars['BigInt']['input']>;
  forkID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forkToken?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forkToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forkToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forkTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forkTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forkTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forkingPeriodEndTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forkingPeriodEndTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  forkingPeriodEndTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  joinedNouns_?: InputMaybe<ForkJoinedNoun_Filter>;
  or?: InputMaybe<Array<InputMaybe<Fork_Filter>>>;
  tokensForkingCount?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_gt?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_gte?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokensForkingCount_lt?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_lte?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_not?: InputMaybe<Scalars['Int']['input']>;
  tokensForkingCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokensInEscrowCount?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_gt?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_gte?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokensInEscrowCount_lt?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_lte?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_not?: InputMaybe<Scalars['Int']['input']>;
  tokensInEscrowCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum Fork_OrderBy {
  EscrowDeposits = 'escrowDeposits',
  EscrowWithdrawals = 'escrowWithdrawals',
  EscrowedNouns = 'escrowedNouns',
  Executed = 'executed',
  ExecutedAt = 'executedAt',
  ForkId = 'forkID',
  ForkToken = 'forkToken',
  ForkTreasury = 'forkTreasury',
  ForkingPeriodEndTimestamp = 'forkingPeriodEndTimestamp',
  Id = 'id',
  JoinedNouns = 'joinedNouns',
  TokensForkingCount = 'tokensForkingCount',
  TokensInEscrowCount = 'tokensInEscrowCount'
}

export type Governance = {
  __typename?: 'Governance';
  /** Number of candidates created */
  candidates: Scalars['BigInt']['output'];
  /** Total number of delegates participating on the governance currently */
  currentDelegates: Scalars['BigInt']['output'];
  /** Total number of token holders currently */
  currentTokenHolders: Scalars['BigInt']['output'];
  /** Total number of votes delegated expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt']['output'];
  /** Total number of votes delegated expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt']['output'];
  /** Unique entity used to keep track of common aggregated data */
  id: Scalars['ID']['output'];
  /** Number of proposals created */
  proposals: Scalars['BigInt']['output'];
  /** Number of proposals currently queued for execution */
  proposalsQueued: Scalars['BigInt']['output'];
  /** Total number of delegates that held delegated votes */
  totalDelegates: Scalars['BigInt']['output'];
  /** Total number of token holders */
  totalTokenHolders: Scalars['BigInt']['output'];
  /** The proposal ID from which vote snapshots are taken at vote start instead of proposal creation */
  voteSnapshotBlockSwitchProposalId: Scalars['BigInt']['output'];
};

export type Governance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Governance_Filter>>>;
  candidates?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  candidates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_not?: InputMaybe<Scalars['BigInt']['input']>;
  candidates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentDelegates?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentDelegates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTokenHolders?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTokenHolders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Governance_Filter>>>;
  proposals?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalsQueued_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegates?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokenHolders?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokenHolders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteSnapshotBlockSwitchProposalId?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteSnapshotBlockSwitchProposalId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlockSwitchProposalId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Governance_OrderBy {
  Candidates = 'candidates',
  CurrentDelegates = 'currentDelegates',
  CurrentTokenHolders = 'currentTokenHolders',
  DelegatedVotes = 'delegatedVotes',
  DelegatedVotesRaw = 'delegatedVotesRaw',
  Id = 'id',
  Proposals = 'proposals',
  ProposalsQueued = 'proposalsQueued',
  TotalDelegates = 'totalDelegates',
  TotalTokenHolders = 'totalTokenHolders',
  VoteSnapshotBlockSwitchProposalId = 'voteSnapshotBlockSwitchProposalId'
}

export type Noun = {
  __typename?: 'Noun';
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
  /** The owner of the Noun */
  owner: Account;
  /** The seed used to determine the Noun's traits */
  seed?: Maybe<Seed>;
  /** Historical votes for the Noun */
  votes: Array<Vote>;
};


export type NounVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Noun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Noun_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Noun_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed?: InputMaybe<Scalars['String']['input']>;
  seed_?: InputMaybe<Seed_Filter>;
  seed_contains?: InputMaybe<Scalars['String']['input']>;
  seed_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_ends_with?: InputMaybe<Scalars['String']['input']>;
  seed_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_gt?: InputMaybe<Scalars['String']['input']>;
  seed_gte?: InputMaybe<Scalars['String']['input']>;
  seed_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seed_lt?: InputMaybe<Scalars['String']['input']>;
  seed_lte?: InputMaybe<Scalars['String']['input']>;
  seed_not?: InputMaybe<Scalars['String']['input']>;
  seed_not_contains?: InputMaybe<Scalars['String']['input']>;
  seed_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  seed_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  seed_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_starts_with?: InputMaybe<Scalars['String']['input']>;
  seed_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Noun_OrderBy {
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerTokenBalance = 'owner__tokenBalance',
  OwnerTokenBalanceRaw = 'owner__tokenBalanceRaw',
  OwnerTotalTokensHeld = 'owner__totalTokensHeld',
  OwnerTotalTokensHeldRaw = 'owner__totalTokensHeldRaw',
  Seed = 'seed',
  SeedAccessory = 'seed__accessory',
  SeedBackground = 'seed__background',
  SeedBody = 'seed__body',
  SeedGlasses = 'seed__glasses',
  SeedHead = 'seed__head',
  SeedId = 'seed__id',
  Votes = 'votes'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proposal = {
  __typename?: 'Proposal';
  /** The number of votes to abstain on the proposal */
  abstainVotes: Scalars['BigInt']['output'];
  /** Adjusted total supply when this proposal was created */
  adjustedTotalSupply: Scalars['BigInt']['output'];
  /** The number of votes against of the proposal */
  againstVotes: Scalars['BigInt']['output'];
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The block number at which this proposal was canceled */
  canceledBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was canceled */
  canceledTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The ID of the client that facilitated this proposal */
  clientId: Scalars['Int']['output'];
  /** The proposal creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** The proposal creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** The proposal creation transaction hash */
  createdTransactionHash: Scalars['Bytes']['output'];
  /** The full proposal description, which includes the title */
  description: Scalars['String']['output'];
  /** Block number from where the voting ends */
  endBlock: Scalars['BigInt']['output'];
  /** The block number at which this proposal was executed */
  executedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was executed */
  executedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** Once the proposal is queued for execution it will have an ETA of the execution */
  executionETA?: Maybe<Scalars['BigInt']['output']>;
  /** Feedback posts associated to this proposal */
  feedbackPosts: Array<ProposalFeedback>;
  /** The number of votes in favor of the proposal */
  forVotes: Scalars['BigInt']['output'];
  /** Internal proposal ID, in this implementation it seems to be a autoincremental id */
  id: Scalars['ID']['output'];
  /** The proposal's last update block */
  lastUpdatedBlock: Scalars['BigInt']['output'];
  /** The proposal's last update timestamp */
  lastUpdatedTimestamp: Scalars['BigInt']['output'];
  /** Dynamic quorum param snapshot: max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int']['output'];
  /** Dynamic quorum param snapshot: min quorum basis points */
  minQuorumVotesBPS: Scalars['Int']['output'];
  /** The objection period end block */
  objectionPeriodEndBlock: Scalars['BigInt']['output'];
  /** True if the proposal was created via proposeOnTimelockV1 */
  onTimelockV1?: Maybe<Scalars['Boolean']['output']>;
  /** The proposal threshold at the time of proposal creation */
  proposalThreshold?: Maybe<Scalars['BigInt']['output']>;
  /** Delegate that proposed the change */
  proposer: Delegate;
  /** The block number at which this proposal was queued */
  queuedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was queued */
  queuedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** Dynamic quorum param snapshot: the dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt']['output'];
  /** The required number of votes for quorum at the time of proposal creation */
  quorumVotes?: Maybe<Scalars['BigInt']['output']>;
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']['output']>>;
  /** Delegates that signed on this proposal to get it over the proposal threshold */
  signers?: Maybe<Array<Delegate>>;
  /** Block number from where the voting starts */
  startBlock: Scalars['BigInt']['output'];
  /** Status of the proposal */
  status?: Maybe<ProposalStatus>;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String']['output'];
  /** Total supply when this proposal was created */
  totalSupply: Scalars['BigInt']['output'];
  /** The update period end block */
  updatePeriodEndBlock?: Maybe<Scalars['BigInt']['output']>;
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']['output']>>;
  /** The block number at which this proposal was vetoed */
  vetoedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was vetoed */
  vetoedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The block at which voting balance snapshots are taken for this proposal */
  voteSnapshotBlock: Scalars['BigInt']['output'];
  /** Votes associated to this proposal */
  votes: Array<Vote>;
};


export type ProposalFeedbackPostsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProposalFeedback_Filter>;
};


export type ProposalSignersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Delegate_Filter>;
};


export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type ProposalCandidate = {
  __typename?: 'ProposalCandidate';
  /** Whether this candidate was canceled or not */
  canceled: Scalars['Boolean']['output'];
  /** The block number at which this candidate was canceled */
  canceledBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp at which this candidate was canceled */
  canceledTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The proposal candidate creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** The proposal candidate creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** The proposal candidate creation transaction hash */
  createdTransactionHash: Scalars['Bytes']['output'];
  /** A concatination of proposer and slug */
  id: Scalars['ID']['output'];
  /** The proposal candidate's last update block */
  lastUpdatedBlock: Scalars['BigInt']['output'];
  /** The proposal candidate's last update timestamp */
  lastUpdatedTimestamp: Scalars['BigInt']['output'];
  /** Latest version of the proposal */
  latestVersion: ProposalCandidateVersion;
  /** This candidate's number */
  number: Scalars['BigInt']['output'];
  /** The proposer account */
  proposer: Scalars['Bytes']['output'];
  /** The candidate slug, together with the proposer account makes the candidate's unique key */
  slug: Scalars['String']['output'];
  /** This candidate's versions */
  versions: Array<ProposalCandidateVersion>;
};


export type ProposalCandidateVersionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidateVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProposalCandidateVersion_Filter>;
};

export type ProposalCandidateContent = {
  __typename?: 'ProposalCandidateContent';
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** This proposal's content signatures by signers */
  contentSignatures: Array<ProposalCandidateSignature>;
  /** The full proposal description, which includes the title */
  description: Scalars['String']['output'];
  /** The encoded proposal hash in bytes */
  encodedProposalHash: Scalars['Bytes']['output'];
  /** The encoded proposal hash */
  id: Scalars['ID']['output'];
  /** IDs of proposals (not candidates) with the same content */
  matchingProposalIds?: Maybe<Array<Scalars['BigInt']['output']>>;
  /** The proposal id that this content is updating. 0 if it's a new proposal */
  proposalIdToUpdate: Scalars['BigInt']['output'];
  /** The proposer account */
  proposer: Scalars['Bytes']['output'];
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']['output']>>;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String']['output'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']['output']>>;
};


export type ProposalCandidateContentContentSignaturesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidateSignature_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProposalCandidateSignature_Filter>;
};

export type ProposalCandidateContent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateContent_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contentSignatures_?: InputMaybe<ProposalCandidateSignature_Filter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encodedProposalHash?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encodedProposalHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  matchingProposalIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  matchingProposalIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  matchingProposalIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  matchingProposalIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  matchingProposalIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  matchingProposalIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateContent_Filter>>>;
  proposalIdToUpdate?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalIdToUpdate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalIdToUpdate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposer?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  targets?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ProposalCandidateContent_OrderBy {
  Calldatas = 'calldatas',
  ContentSignatures = 'contentSignatures',
  Description = 'description',
  EncodedProposalHash = 'encodedProposalHash',
  Id = 'id',
  MatchingProposalIds = 'matchingProposalIds',
  ProposalIdToUpdate = 'proposalIdToUpdate',
  Proposer = 'proposer',
  Signatures = 'signatures',
  Targets = 'targets',
  Title = 'title',
  Values = 'values'
}

export type ProposalCandidateSignature = {
  __typename?: 'ProposalCandidateSignature';
  /** Whether this signature has been canceled */
  canceled: Scalars['Boolean']['output'];
  /** The candidate content this signature is signing on */
  content: ProposalCandidateContent;
  /** The signature's creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** The signature's creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** The hash of the abi encoded proposal data */
  encodedProposalHash: Scalars['Bytes']['output'];
  /** The signature's expiration timestamp */
  expirationTimestamp: Scalars['BigInt']['output'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID']['output'];
  /** The free text signer reason */
  reason: Scalars['String']['output'];
  /** The signature bytes */
  sig: Scalars['Bytes']['output'];
  /** The typed signature hash */
  sigDigest: Scalars['Bytes']['output'];
  /** The signing account */
  signer: Delegate;
};

export type ProposalCandidateSignature_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateSignature_Filter>>>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_?: InputMaybe<ProposalCandidateContent_Filter>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_gt?: InputMaybe<Scalars['String']['input']>;
  content_gte?: InputMaybe<Scalars['String']['input']>;
  content_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_lt?: InputMaybe<Scalars['String']['input']>;
  content_lte?: InputMaybe<Scalars['String']['input']>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  encodedProposalHash?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encodedProposalHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedProposalHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  expirationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateSignature_Filter>>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sig?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sigDigest_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_not?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sigDigest_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sig_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sig_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sig_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sig_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sig_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sig_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sig_not?: InputMaybe<Scalars['Bytes']['input']>;
  sig_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sig_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Delegate_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ProposalCandidateSignature_OrderBy {
  Canceled = 'canceled',
  Content = 'content',
  ContentDescription = 'content__description',
  ContentEncodedProposalHash = 'content__encodedProposalHash',
  ContentId = 'content__id',
  ContentProposalIdToUpdate = 'content__proposalIdToUpdate',
  ContentProposer = 'content__proposer',
  ContentTitle = 'content__title',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  EncodedProposalHash = 'encodedProposalHash',
  ExpirationTimestamp = 'expirationTimestamp',
  Id = 'id',
  Reason = 'reason',
  Sig = 'sig',
  SigDigest = 'sigDigest',
  Signer = 'signer',
  SignerDelegatedVotes = 'signer__delegatedVotes',
  SignerDelegatedVotesRaw = 'signer__delegatedVotesRaw',
  SignerId = 'signer__id',
  SignerTokenHoldersRepresentedAmount = 'signer__tokenHoldersRepresentedAmount'
}

export type ProposalCandidateVersion = {
  __typename?: 'ProposalCandidateVersion';
  /** The proposal content */
  content: ProposalCandidateContent;
  /** The version's creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** This version's creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID']['output'];
  /** The proposal candidate this entity is a version of */
  proposal: ProposalCandidate;
  /** The update message of this version, relevant when it's an update */
  updateMessage: Scalars['String']['output'];
};

export type ProposalCandidateVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateVersion_Filter>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_?: InputMaybe<ProposalCandidateContent_Filter>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_gt?: InputMaybe<Scalars['String']['input']>;
  content_gte?: InputMaybe<Scalars['String']['input']>;
  content_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_lt?: InputMaybe<Scalars['String']['input']>;
  content_lte?: InputMaybe<Scalars['String']['input']>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateVersion_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<ProposalCandidate_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage?: InputMaybe<Scalars['String']['input']>;
  updateMessage_contains?: InputMaybe<Scalars['String']['input']>;
  updateMessage_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_gt?: InputMaybe<Scalars['String']['input']>;
  updateMessage_gte?: InputMaybe<Scalars['String']['input']>;
  updateMessage_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updateMessage_lt?: InputMaybe<Scalars['String']['input']>;
  updateMessage_lte?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updateMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ProposalCandidateVersion_OrderBy {
  Content = 'content',
  ContentDescription = 'content__description',
  ContentEncodedProposalHash = 'content__encodedProposalHash',
  ContentId = 'content__id',
  ContentProposalIdToUpdate = 'content__proposalIdToUpdate',
  ContentProposer = 'content__proposer',
  ContentTitle = 'content__title',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  Id = 'id',
  Proposal = 'proposal',
  ProposalCanceled = 'proposal__canceled',
  ProposalCanceledBlock = 'proposal__canceledBlock',
  ProposalCanceledTimestamp = 'proposal__canceledTimestamp',
  ProposalCreatedBlock = 'proposal__createdBlock',
  ProposalCreatedTimestamp = 'proposal__createdTimestamp',
  ProposalCreatedTransactionHash = 'proposal__createdTransactionHash',
  ProposalId = 'proposal__id',
  ProposalLastUpdatedBlock = 'proposal__lastUpdatedBlock',
  ProposalLastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  ProposalNumber = 'proposal__number',
  ProposalProposer = 'proposal__proposer',
  ProposalSlug = 'proposal__slug',
  UpdateMessage = 'updateMessage'
}

export type ProposalCandidate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidate_Filter>>>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  canceledBlock?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastUpdatedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestVersion?: InputMaybe<Scalars['String']['input']>;
  latestVersion_?: InputMaybe<ProposalCandidateVersion_Filter>;
  latestVersion_contains?: InputMaybe<Scalars['String']['input']>;
  latestVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestVersion_gt?: InputMaybe<Scalars['String']['input']>;
  latestVersion_gte?: InputMaybe<Scalars['String']['input']>;
  latestVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestVersion_lt?: InputMaybe<Scalars['String']['input']>;
  latestVersion_lte?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['BigInt']['input']>;
  number_gt?: InputMaybe<Scalars['BigInt']['input']>;
  number_gte?: InputMaybe<Scalars['BigInt']['input']>;
  number_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  number_lt?: InputMaybe<Scalars['BigInt']['input']>;
  number_lte?: InputMaybe<Scalars['BigInt']['input']>;
  number_not?: InputMaybe<Scalars['BigInt']['input']>;
  number_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidate_Filter>>>;
  proposer?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_gt?: InputMaybe<Scalars['String']['input']>;
  slug_gte?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_lt?: InputMaybe<Scalars['String']['input']>;
  slug_lte?: InputMaybe<Scalars['String']['input']>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  versions_?: InputMaybe<ProposalCandidateVersion_Filter>;
};

export enum ProposalCandidate_OrderBy {
  Canceled = 'canceled',
  CanceledBlock = 'canceledBlock',
  CanceledTimestamp = 'canceledTimestamp',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  CreatedTransactionHash = 'createdTransactionHash',
  Id = 'id',
  LastUpdatedBlock = 'lastUpdatedBlock',
  LastUpdatedTimestamp = 'lastUpdatedTimestamp',
  LatestVersion = 'latestVersion',
  LatestVersionCreatedBlock = 'latestVersion__createdBlock',
  LatestVersionCreatedTimestamp = 'latestVersion__createdTimestamp',
  LatestVersionId = 'latestVersion__id',
  LatestVersionUpdateMessage = 'latestVersion__updateMessage',
  Number = 'number',
  Proposer = 'proposer',
  Slug = 'slug',
  Versions = 'versions'
}

export type ProposalFeedback = {
  __typename?: 'ProposalFeedback';
  /** The feedback's creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** This feedback's creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID']['output'];
  /** The proposal this feedback is provided on */
  proposal: Proposal;
  /** The optional feedback reason free text */
  reason?: Maybe<Scalars['String']['output']>;
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int']['output'];
  /** The voter account providing the feedback */
  voter: Delegate;
  /** Amount of votes voter had when feedback was submitted */
  votes: Scalars['BigInt']['output'];
};

export type ProposalFeedback_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalFeedback_Filter>>>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalFeedback_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supportDetailed?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ProposalFeedback_OrderBy {
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  Id = 'id',
  Proposal = 'proposal',
  ProposalAbstainVotes = 'proposal__abstainVotes',
  ProposalAdjustedTotalSupply = 'proposal__adjustedTotalSupply',
  ProposalAgainstVotes = 'proposal__againstVotes',
  ProposalCanceledBlock = 'proposal__canceledBlock',
  ProposalCanceledTimestamp = 'proposal__canceledTimestamp',
  ProposalClientId = 'proposal__clientId',
  ProposalCreatedBlock = 'proposal__createdBlock',
  ProposalCreatedTimestamp = 'proposal__createdTimestamp',
  ProposalCreatedTransactionHash = 'proposal__createdTransactionHash',
  ProposalDescription = 'proposal__description',
  ProposalEndBlock = 'proposal__endBlock',
  ProposalExecutedBlock = 'proposal__executedBlock',
  ProposalExecutedTimestamp = 'proposal__executedTimestamp',
  ProposalExecutionEta = 'proposal__executionETA',
  ProposalForVotes = 'proposal__forVotes',
  ProposalId = 'proposal__id',
  ProposalLastUpdatedBlock = 'proposal__lastUpdatedBlock',
  ProposalLastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  ProposalMaxQuorumVotesBps = 'proposal__maxQuorumVotesBPS',
  ProposalMinQuorumVotesBps = 'proposal__minQuorumVotesBPS',
  ProposalObjectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  ProposalOnTimelockV1 = 'proposal__onTimelockV1',
  ProposalProposalThreshold = 'proposal__proposalThreshold',
  ProposalQueuedBlock = 'proposal__queuedBlock',
  ProposalQueuedTimestamp = 'proposal__queuedTimestamp',
  ProposalQuorumCoefficient = 'proposal__quorumCoefficient',
  ProposalQuorumVotes = 'proposal__quorumVotes',
  ProposalStartBlock = 'proposal__startBlock',
  ProposalStatus = 'proposal__status',
  ProposalTitle = 'proposal__title',
  ProposalTotalSupply = 'proposal__totalSupply',
  ProposalUpdatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  ProposalVetoedBlock = 'proposal__vetoedBlock',
  ProposalVetoedTimestamp = 'proposal__vetoedTimestamp',
  ProposalVoteSnapshotBlock = 'proposal__voteSnapshotBlock',
  Reason = 'reason',
  SupportDetailed = 'supportDetailed',
  Voter = 'voter',
  VoterDelegatedVotes = 'voter__delegatedVotes',
  VoterDelegatedVotesRaw = 'voter__delegatedVotesRaw',
  VoterId = 'voter__id',
  VoterTokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  Votes = 'votes'
}

export enum ProposalStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Executed = 'EXECUTED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Vetoed = 'VETOED'
}

export type ProposalVersion = {
  __typename?: 'ProposalVersion';
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The block timestamp of the update */
  createdAt: Scalars['BigInt']['output'];
  /** The block number of the update */
  createdBlock: Scalars['BigInt']['output'];
  /** The full proposal description, which includes the title */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The proposal that was updated */
  proposal: Proposal;
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']['output']>>;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String']['output'];
  /** The update message of this proposal version, relevant when it's a proposal update */
  updateMessage: Scalars['String']['output'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']['output']>>;
};

export type ProposalVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalVersion_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalVersion_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  targets?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage?: InputMaybe<Scalars['String']['input']>;
  updateMessage_contains?: InputMaybe<Scalars['String']['input']>;
  updateMessage_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_gt?: InputMaybe<Scalars['String']['input']>;
  updateMessage_gte?: InputMaybe<Scalars['String']['input']>;
  updateMessage_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updateMessage_lt?: InputMaybe<Scalars['String']['input']>;
  updateMessage_lte?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updateMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updateMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  updateMessage_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ProposalVersion_OrderBy {
  Calldatas = 'calldatas',
  CreatedAt = 'createdAt',
  CreatedBlock = 'createdBlock',
  Description = 'description',
  Id = 'id',
  Proposal = 'proposal',
  ProposalAbstainVotes = 'proposal__abstainVotes',
  ProposalAdjustedTotalSupply = 'proposal__adjustedTotalSupply',
  ProposalAgainstVotes = 'proposal__againstVotes',
  ProposalCanceledBlock = 'proposal__canceledBlock',
  ProposalCanceledTimestamp = 'proposal__canceledTimestamp',
  ProposalClientId = 'proposal__clientId',
  ProposalCreatedBlock = 'proposal__createdBlock',
  ProposalCreatedTimestamp = 'proposal__createdTimestamp',
  ProposalCreatedTransactionHash = 'proposal__createdTransactionHash',
  ProposalDescription = 'proposal__description',
  ProposalEndBlock = 'proposal__endBlock',
  ProposalExecutedBlock = 'proposal__executedBlock',
  ProposalExecutedTimestamp = 'proposal__executedTimestamp',
  ProposalExecutionEta = 'proposal__executionETA',
  ProposalForVotes = 'proposal__forVotes',
  ProposalId = 'proposal__id',
  ProposalLastUpdatedBlock = 'proposal__lastUpdatedBlock',
  ProposalLastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  ProposalMaxQuorumVotesBps = 'proposal__maxQuorumVotesBPS',
  ProposalMinQuorumVotesBps = 'proposal__minQuorumVotesBPS',
  ProposalObjectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  ProposalOnTimelockV1 = 'proposal__onTimelockV1',
  ProposalProposalThreshold = 'proposal__proposalThreshold',
  ProposalQueuedBlock = 'proposal__queuedBlock',
  ProposalQueuedTimestamp = 'proposal__queuedTimestamp',
  ProposalQuorumCoefficient = 'proposal__quorumCoefficient',
  ProposalQuorumVotes = 'proposal__quorumVotes',
  ProposalStartBlock = 'proposal__startBlock',
  ProposalStatus = 'proposal__status',
  ProposalTitle = 'proposal__title',
  ProposalTotalSupply = 'proposal__totalSupply',
  ProposalUpdatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  ProposalVetoedBlock = 'proposal__vetoedBlock',
  ProposalVetoedTimestamp = 'proposal__vetoedTimestamp',
  ProposalVoteSnapshotBlock = 'proposal__voteSnapshotBlock',
  Signatures = 'signatures',
  Targets = 'targets',
  Title = 'title',
  UpdateMessage = 'updateMessage',
  Values = 'values'
}

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  abstainVotes?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  abstainVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adjustedTotalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adjustedTotalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  adjustedTotalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  againstVotes?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  againstVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  canceledBlock?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientId_gt?: InputMaybe<Scalars['Int']['input']>;
  clientId_gte?: InputMaybe<Scalars['Int']['input']>;
  clientId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clientId_lt?: InputMaybe<Scalars['Int']['input']>;
  clientId_lte?: InputMaybe<Scalars['Int']['input']>;
  clientId_not?: InputMaybe<Scalars['Int']['input']>;
  clientId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionETA?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionETA_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_not?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feedbackPosts_?: InputMaybe<ProposalFeedback_Filter>;
  forVotes?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastUpdatedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  objectionPeriodEndBlock?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  objectionPeriodEndBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  objectionPeriodEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  onTimelockV1?: InputMaybe<Scalars['Boolean']['input']>;
  onTimelockV1_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  onTimelockV1_not?: InputMaybe<Scalars['Boolean']['input']>;
  onTimelockV1_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposer?: InputMaybe<Scalars['String']['input']>;
  proposer_?: InputMaybe<Delegate_Filter>;
  proposer_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_gt?: InputMaybe<Scalars['String']['input']>;
  proposer_gte?: InputMaybe<Scalars['String']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_lt?: InputMaybe<Scalars['String']['input']>;
  proposer_lte?: InputMaybe<Scalars['String']['input']>;
  proposer_not?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queuedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumVotes?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signers?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_?: InputMaybe<Delegate_Filter>;
  signers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  startBlock?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not?: InputMaybe<ProposalStatus>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  targets?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatePeriodEndBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatePeriodEndBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatePeriodEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteSnapshotBlock?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteSnapshotBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteSnapshotBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Proposal_OrderBy {
  AbstainVotes = 'abstainVotes',
  AdjustedTotalSupply = 'adjustedTotalSupply',
  AgainstVotes = 'againstVotes',
  Calldatas = 'calldatas',
  CanceledBlock = 'canceledBlock',
  CanceledTimestamp = 'canceledTimestamp',
  ClientId = 'clientId',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  CreatedTransactionHash = 'createdTransactionHash',
  Description = 'description',
  EndBlock = 'endBlock',
  ExecutedBlock = 'executedBlock',
  ExecutedTimestamp = 'executedTimestamp',
  ExecutionEta = 'executionETA',
  FeedbackPosts = 'feedbackPosts',
  ForVotes = 'forVotes',
  Id = 'id',
  LastUpdatedBlock = 'lastUpdatedBlock',
  LastUpdatedTimestamp = 'lastUpdatedTimestamp',
  MaxQuorumVotesBps = 'maxQuorumVotesBPS',
  MinQuorumVotesBps = 'minQuorumVotesBPS',
  ObjectionPeriodEndBlock = 'objectionPeriodEndBlock',
  OnTimelockV1 = 'onTimelockV1',
  ProposalThreshold = 'proposalThreshold',
  Proposer = 'proposer',
  ProposerDelegatedVotes = 'proposer__delegatedVotes',
  ProposerDelegatedVotesRaw = 'proposer__delegatedVotesRaw',
  ProposerId = 'proposer__id',
  ProposerTokenHoldersRepresentedAmount = 'proposer__tokenHoldersRepresentedAmount',
  QueuedBlock = 'queuedBlock',
  QueuedTimestamp = 'queuedTimestamp',
  QuorumCoefficient = 'quorumCoefficient',
  QuorumVotes = 'quorumVotes',
  Signatures = 'signatures',
  Signers = 'signers',
  StartBlock = 'startBlock',
  Status = 'status',
  Targets = 'targets',
  Title = 'title',
  TotalSupply = 'totalSupply',
  UpdatePeriodEndBlock = 'updatePeriodEndBlock',
  Values = 'values',
  VetoedBlock = 'vetoedBlock',
  VetoedTimestamp = 'vetoedTimestamp',
  VoteSnapshotBlock = 'voteSnapshotBlock',
  Votes = 'votes'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  candidateFeedback?: Maybe<CandidateFeedback>;
  candidateFeedbacks: Array<CandidateFeedback>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  delegationEvent?: Maybe<DelegationEvent>;
  delegationEvents: Array<DelegationEvent>;
  dynamicQuorumParams?: Maybe<DynamicQuorumParams>;
  dynamicQuorumParams_collection: Array<DynamicQuorumParams>;
  escrowDeposit?: Maybe<EscrowDeposit>;
  escrowDeposits: Array<EscrowDeposit>;
  escrowWithdrawal?: Maybe<EscrowWithdrawal>;
  escrowWithdrawals: Array<EscrowWithdrawal>;
  escrowedNoun?: Maybe<EscrowedNoun>;
  escrowedNouns: Array<EscrowedNoun>;
  fork?: Maybe<Fork>;
  forkJoin?: Maybe<ForkJoin>;
  forkJoinedNoun?: Maybe<ForkJoinedNoun>;
  forkJoinedNouns: Array<ForkJoinedNoun>;
  forkJoins: Array<ForkJoin>;
  forks: Array<Fork>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  proposal?: Maybe<Proposal>;
  proposalCandidate?: Maybe<ProposalCandidate>;
  proposalCandidateContent?: Maybe<ProposalCandidateContent>;
  proposalCandidateContents: Array<ProposalCandidateContent>;
  proposalCandidateSignature?: Maybe<ProposalCandidateSignature>;
  proposalCandidateSignatures: Array<ProposalCandidateSignature>;
  proposalCandidateVersion?: Maybe<ProposalCandidateVersion>;
  proposalCandidateVersions: Array<ProposalCandidateVersion>;
  proposalCandidates: Array<ProposalCandidate>;
  proposalFeedback?: Maybe<ProposalFeedback>;
  proposalFeedbacks: Array<ProposalFeedback>;
  proposalVersion?: Maybe<ProposalVersion>;
  proposalVersions: Array<ProposalVersion>;
  proposals: Array<Proposal>;
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};


export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type QueryCandidateFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCandidateFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CandidateFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CandidateFeedback_Filter>;
};


export type QueryDelegateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegate_Filter>;
};


export type QueryDelegationEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationEvent_Filter>;
};


export type QueryDynamicQuorumParamsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDynamicQuorumParams_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DynamicQuorumParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DynamicQuorumParams_Filter>;
};


export type QueryEscrowDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowDeposit_Filter>;
};


export type QueryEscrowWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowWithdrawal_Filter>;
};


export type QueryEscrowedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EscrowedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowedNoun_Filter>;
};


export type QueryForkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ForkJoinedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoinedNoun_Filter>;
};


export type QueryForkJoinsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ForkJoin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoin_Filter>;
};


export type QueryForksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fork_Filter>;
};


export type QueryGovernanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Governance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governance_Filter>;
};


export type QueryNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Noun_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateContentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateContentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidateContent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateContent_Filter>;
};


export type QueryProposalCandidateSignatureArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateSignaturesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidateSignature_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateSignature_Filter>;
};


export type QueryProposalCandidateVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidateVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateVersion_Filter>;
};


export type QueryProposalCandidatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalCandidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidate_Filter>;
};


export type QueryProposalFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalFeedback_Filter>;
};


export type QueryProposalVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalVersion_Filter>;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type QuerySeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Seed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seed_Filter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Seed = {
  __typename?: 'Seed';
  /** The accessory index */
  accessory: Scalars['BigInt']['output'];
  /** The background index */
  background: Scalars['BigInt']['output'];
  /** The body index */
  body: Scalars['BigInt']['output'];
  /** The glasses index */
  glasses: Scalars['BigInt']['output'];
  /** The head index */
  head: Scalars['BigInt']['output'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
};

export type Seed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessory?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accessory_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_not?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Seed_Filter>>>;
  background?: InputMaybe<Scalars['BigInt']['input']>;
  background_gt?: InputMaybe<Scalars['BigInt']['input']>;
  background_gte?: InputMaybe<Scalars['BigInt']['input']>;
  background_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  background_lt?: InputMaybe<Scalars['BigInt']['input']>;
  background_lte?: InputMaybe<Scalars['BigInt']['input']>;
  background_not?: InputMaybe<Scalars['BigInt']['input']>;
  background_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  body?: InputMaybe<Scalars['BigInt']['input']>;
  body_gt?: InputMaybe<Scalars['BigInt']['input']>;
  body_gte?: InputMaybe<Scalars['BigInt']['input']>;
  body_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  body_lt?: InputMaybe<Scalars['BigInt']['input']>;
  body_lte?: InputMaybe<Scalars['BigInt']['input']>;
  body_not?: InputMaybe<Scalars['BigInt']['input']>;
  body_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  glasses?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_gt?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_gte?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  glasses_lt?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_lte?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_not?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  head?: InputMaybe<Scalars['BigInt']['input']>;
  head_gt?: InputMaybe<Scalars['BigInt']['input']>;
  head_gte?: InputMaybe<Scalars['BigInt']['input']>;
  head_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  head_lt?: InputMaybe<Scalars['BigInt']['input']>;
  head_lte?: InputMaybe<Scalars['BigInt']['input']>;
  head_not?: InputMaybe<Scalars['BigInt']['input']>;
  head_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Seed_Filter>>>;
};

export enum Seed_OrderBy {
  Accessory = 'accessory',
  Background = 'background',
  Body = 'body',
  Glasses = 'glasses',
  Head = 'head',
  Id = 'id'
}

export type TransferEvent = {
  __typename?: 'TransferEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** The txn hash of this event */
  id: Scalars['ID']['output'];
  /** New holder address */
  newHolder: Account;
  /** The Noun being transfered */
  noun: Noun;
  /** Previous holder address */
  previousHolder: Account;
};

export type TransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newHolder?: InputMaybe<Scalars['String']['input']>;
  newHolder_?: InputMaybe<Account_Filter>;
  newHolder_contains?: InputMaybe<Scalars['String']['input']>;
  newHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_gt?: InputMaybe<Scalars['String']['input']>;
  newHolder_gte?: InputMaybe<Scalars['String']['input']>;
  newHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHolder_lt?: InputMaybe<Scalars['String']['input']>;
  newHolder_lte?: InputMaybe<Scalars['String']['input']>;
  newHolder_not?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  previousHolder?: InputMaybe<Scalars['String']['input']>;
  previousHolder_?: InputMaybe<Account_Filter>;
  previousHolder_contains?: InputMaybe<Scalars['String']['input']>;
  previousHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_gt?: InputMaybe<Scalars['String']['input']>;
  previousHolder_gte?: InputMaybe<Scalars['String']['input']>;
  previousHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousHolder_lt?: InputMaybe<Scalars['String']['input']>;
  previousHolder_lte?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TransferEvent_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewHolder = 'newHolder',
  NewHolderId = 'newHolder__id',
  NewHolderTokenBalance = 'newHolder__tokenBalance',
  NewHolderTokenBalanceRaw = 'newHolder__tokenBalanceRaw',
  NewHolderTotalTokensHeld = 'newHolder__totalTokensHeld',
  NewHolderTotalTokensHeldRaw = 'newHolder__totalTokensHeldRaw',
  Noun = 'noun',
  NounId = 'noun__id',
  PreviousHolder = 'previousHolder',
  PreviousHolderId = 'previousHolder__id',
  PreviousHolderTokenBalance = 'previousHolder__tokenBalance',
  PreviousHolderTokenBalanceRaw = 'previousHolder__tokenBalanceRaw',
  PreviousHolderTotalTokensHeld = 'previousHolder__totalTokensHeld',
  PreviousHolderTotalTokensHeldRaw = 'previousHolder__totalTokensHeldRaw'
}

export type Vote = {
  __typename?: 'Vote';
  /** Block number of vote */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the vote is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** The ID of the client that facilitated this vote */
  clientId: Scalars['Int']['output'];
  /** Delegate ID + Proposal ID */
  id: Scalars['ID']['output'];
  /** The Nouns used to vote */
  nouns?: Maybe<Array<Noun>>;
  /** Proposal that is being voted on */
  proposal: Proposal;
  /** The optional vote reason */
  reason?: Maybe<Scalars['String']['output']>;
  /** Whether the vote is in favour of the proposal */
  support: Scalars['Boolean']['output'];
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int']['output'];
  /** Delegate that emitted the vote */
  voter: Delegate;
  /** Amount of votes in favour or against expressed as a BigInt normalized value for the Nouns ERC721 Token */
  votes: Scalars['BigInt']['output'];
  /** Amount of votes in favour or against expressed in the smallest unit of the Nouns ERC721 Token */
  votesRaw: Scalars['BigInt']['output'];
};


export type VoteNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Noun_Filter>;
};

export type Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientId_gt?: InputMaybe<Scalars['Int']['input']>;
  clientId_gte?: InputMaybe<Scalars['Int']['input']>;
  clientId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clientId_lt?: InputMaybe<Scalars['Int']['input']>;
  clientId_lte?: InputMaybe<Scalars['Int']['input']>;
  clientId_not?: InputMaybe<Scalars['Int']['input']>;
  clientId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nouns?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_?: InputMaybe<Noun_Filter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  support?: InputMaybe<Scalars['Boolean']['input']>;
  supportDetailed?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  support_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  support_not?: InputMaybe<Scalars['Boolean']['input']>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Vote_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClientId = 'clientId',
  Id = 'id',
  Nouns = 'nouns',
  Proposal = 'proposal',
  ProposalAbstainVotes = 'proposal__abstainVotes',
  ProposalAdjustedTotalSupply = 'proposal__adjustedTotalSupply',
  ProposalAgainstVotes = 'proposal__againstVotes',
  ProposalCanceledBlock = 'proposal__canceledBlock',
  ProposalCanceledTimestamp = 'proposal__canceledTimestamp',
  ProposalClientId = 'proposal__clientId',
  ProposalCreatedBlock = 'proposal__createdBlock',
  ProposalCreatedTimestamp = 'proposal__createdTimestamp',
  ProposalCreatedTransactionHash = 'proposal__createdTransactionHash',
  ProposalDescription = 'proposal__description',
  ProposalEndBlock = 'proposal__endBlock',
  ProposalExecutedBlock = 'proposal__executedBlock',
  ProposalExecutedTimestamp = 'proposal__executedTimestamp',
  ProposalExecutionEta = 'proposal__executionETA',
  ProposalForVotes = 'proposal__forVotes',
  ProposalId = 'proposal__id',
  ProposalLastUpdatedBlock = 'proposal__lastUpdatedBlock',
  ProposalLastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  ProposalMaxQuorumVotesBps = 'proposal__maxQuorumVotesBPS',
  ProposalMinQuorumVotesBps = 'proposal__minQuorumVotesBPS',
  ProposalObjectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  ProposalOnTimelockV1 = 'proposal__onTimelockV1',
  ProposalProposalThreshold = 'proposal__proposalThreshold',
  ProposalQueuedBlock = 'proposal__queuedBlock',
  ProposalQueuedTimestamp = 'proposal__queuedTimestamp',
  ProposalQuorumCoefficient = 'proposal__quorumCoefficient',
  ProposalQuorumVotes = 'proposal__quorumVotes',
  ProposalStartBlock = 'proposal__startBlock',
  ProposalStatus = 'proposal__status',
  ProposalTitle = 'proposal__title',
  ProposalTotalSupply = 'proposal__totalSupply',
  ProposalUpdatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  ProposalVetoedBlock = 'proposal__vetoedBlock',
  ProposalVetoedTimestamp = 'proposal__vetoedTimestamp',
  ProposalVoteSnapshotBlock = 'proposal__voteSnapshotBlock',
  Reason = 'reason',
  Support = 'support',
  SupportDetailed = 'supportDetailed',
  Voter = 'voter',
  VoterDelegatedVotes = 'voter__delegatedVotes',
  VoterDelegatedVotesRaw = 'voter__delegatedVotesRaw',
  VoterId = 'voter__id',
  VoterTokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  Votes = 'votes',
  VotesRaw = 'votesRaw'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetAuctionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAuctionQuery = { __typename?: 'Query', auction?: { __typename?: 'Auction', id: string, amount: any, settled: boolean, startTime: any, endTime: any, bidder?: { __typename?: 'Account', id: string } | null, noun: { __typename?: 'Noun', id: string, seed?: { __typename?: 'Seed', id: string, background: any, body: any, accessory: any, head: any, glasses: any } | null, owner: { __typename?: 'Account', id: string } }, bids: Array<{ __typename?: 'Bid', id: string, blockNumber: any, txIndex: any, amount: any }> } | null };


export const GetAuctionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"settled"}},{"kind":"Field","name":{"kind":"Name","value":"bidder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"noun"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"accessory"}},{"kind":"Field","name":{"kind":"Name","value":"head"}},{"kind":"Field","name":{"kind":"Name","value":"glasses"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"txIndex"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<GetAuctionQuery, GetAuctionQueryVariables>;