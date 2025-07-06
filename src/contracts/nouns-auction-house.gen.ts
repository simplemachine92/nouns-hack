import {
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsAuctionHouse
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionHouseAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'logic', internalType: 'address', type: 'address' },
      { name: 'admin', internalType: 'address', type: 'address' },
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
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: 'admin_', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionHouseAddress = {
  1: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
  11155111: '0x488609b7113FCf3B761A05956300d605E8f6BcAf',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionHouseConfig = {
  address: nounsAuctionHouseAddress,
  abi: nounsAuctionHouseAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouse = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAuctionHouseAbi,
  address: nounsAuctionHouseAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouseAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'admin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouseChangeAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouseImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouseUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionHouseUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouseAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'admin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouseChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouseImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouseUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionHouseUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionHouseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionHouseAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionHouseBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionHouseUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'Upgraded',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouse = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionHouseAbi,
  address: nounsAuctionHouseAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouseAdmin = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionHouseAbi,
  address: nounsAuctionHouseAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouseChangeAdmin =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouseImplementation =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouseUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionHouseUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouse = /*#__PURE__*/ createSimulateContract({
  abi: nounsAuctionHouseAbi,
  address: nounsAuctionHouseAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouseAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'admin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouseChangeAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouseImplementation =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouseUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionHouseUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionHouseEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionHouseAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionHouseBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionHouseAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionHouseUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionHouseAbi,
    address: nounsAuctionHouseAddress,
    eventName: 'Upgraded',
  })
