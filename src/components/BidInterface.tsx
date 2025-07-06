// src/components/BidInterface.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { useConfigurableContracts } from '../contexts/ConfigurableContractProvider';
import { NounsAuctionHouseABI } from '@nouns/sdk'; 
import { parseEther } from 'viem';

const styles: { [key: string]: React.CSSProperties } = {
  container: { marginBottom: '24px' },
  inputContainer: { position: 'relative', display: 'flex', alignItems: 'center' },
  ethSymbol: { position: 'absolute', left: '16px', fontSize: '16px', color: '#6B7280' },
  input: { width: '100%', padding: '12px 16px 12px 36px', fontSize: '16px', fontWeight: 500, borderRadius: '12px', border: '1px solid #D1D5DB', backgroundColor: '#fff', boxSizing: 'border-box', color: '#111827' },
  button: { width: '100%', padding: '12px 16px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', backgroundColor: '#373737', color: '#fff', cursor: 'pointer', marginTop: '12px', transition: 'background-color 0.2s' },
  buttonDisabled: { backgroundColor: '#D1D5DB', cursor: 'not-allowed' },
  error: { color: '#EF4444', fontSize: '14px', marginTop: '8px' },
};

interface BidInterfaceProps {
  auctionId: bigint;
  currentBid: string; // In wei
  onBidSuccess: () => void;
}

export const BidInterface = ({ auctionId, currentBid, onBidSuccess }: BidInterfaceProps) => {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // Destructure the specific address we need from the updated context
  const { nounsAuctionHouseAddress } = useConfigurableContracts();
  
  const { data: hash, isPending: isConfirming, writeContract } = useWriteContract();
  const { isLoading: isBidding, isSuccess: isBidSuccessful } = useWaitForTransactionReceipt({ hash });
  
  const { data: fetchedIncrement, isLoading: isIncrementLoading } = useReadContract({
      abi: NounsAuctionHouseABI,
      address: nounsAuctionHouseAddress,
      functionName: 'minBidIncrementPercentage',
      query: {
        enabled: !!nounsAuctionHouseAddress,
      }
  });

  const minBidWei = useMemo(() => {
    if (typeof fetchedIncrement === 'undefined') {
      return null;
    }
    if (fetchedIncrement == null) {
      return null;
    }
    const currentBidBigInt = BigInt(currentBid);
    const incrementPercentage = BigInt(fetchedIncrement as bigint);
    
    const increment = (currentBidBigInt * incrementPercentage) / 100n;
    return currentBidBigInt + increment;
  }, [currentBid, fetchedIncrement]);

  const minBidEth = useMemo(() => {
    if (minBidWei === null) {
      return '';
    }
    const etherValue = Number(minBidWei) / 1e18;
    return etherValue.toFixed(4);
  }, [minBidWei]);

  useEffect(() => {
    if (isBidSuccessful) {
      onBidSuccess();
      setBidAmount('');
    }
  }, [isBidSuccessful, onBidSuccess]);

  const handlePlaceBid = () => {
    setError(null);
    if (minBidWei === null) return;
    
    const bidAmountNum = parseFloat(bidAmount);
    if (isNaN(bidAmountNum) || bidAmountNum <= 0) {
      setError('Please enter a valid bid amount.');
      return;
    }

    const bidWei = parseEther(bidAmount);
    if (bidWei < minBidWei) {
      setError(`Your bid must be at least Ξ ${minBidEth}.`);
      return;
    }

    writeContract({
      address: nounsAuctionHouseAddress,
      abi: NounsAuctionHouseABI,
      functionName: 'createBid',
      args: [auctionId],
      value: bidWei,
    });
  };
  
  const isButtonDisabled = isConfirming || isBidding || isIncrementLoading;
  const buttonText = isIncrementLoading ? 'Loading...' : isConfirming ? 'Confirm in wallet...' : isBidding ? 'Submitting bid...' : 'Place Bid';

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <span style={styles.ethSymbol}>Ξ</span>
        <input
          type="number"
          step="0.01"
          min={minBidEth}
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder={isIncrementLoading ? 'Loading...' : minBidEth}
          style={styles.input}
          disabled={isButtonDisabled}
        />
      </div>
      <button
        onClick={handlePlaceBid}
        disabled={isButtonDisabled}
        style={{ ...styles.button, ...(isButtonDisabled && styles.buttonDisabled) }}
      >
        {buttonText}
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};