import { createUseWatchContractEvent } from 'wagmi/codegen'

import { createWatchContractEvent } from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsTreasury
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'logic', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryAddress = {
  1: '0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71',
  11155111: '0x07e5D6a1550aD5E597A9b0698A474AA080A2fB28',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryConfig = {
  address: nounsTreasuryAddress,
  abi: nounsTreasuryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'Upgraded',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsTreasuryAbi,
  address: nounsTreasuryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'Upgraded',
  })
