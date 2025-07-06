// src/components/Wallet.tsx
import React, { useState, useEffect, useRef, useMemo } from 'react'; // 1. Import useMemo
import {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useEnsName,
} from 'wagmi';

// --- STYLES and HELPER COMPONENTS (No changes needed) ---
const styles = {
  button: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 500,
    fontSize: '14px',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  },
  buttonHover: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  dropdownContainer: {
    position: 'relative' as 'relative',
    display: 'inline-block', 
  },
  dropdownMenu: {
    position: 'absolute' as 'absolute',
    top: 'calc(100% + 8px)',
    left: 0, 
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '8px',
    width: 'auto',
    minWidth: '200px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  disconnectButton: {
    width: '100%',
    padding: '10px 15px',
    border: '1px solid #fecaca',
    borderRadius: '20px',
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'center' as 'center',
  },
  modalBackdrop: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '12px',
  },
  connectorButton: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    textAlign: 'left' as 'left',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
};
const EthBalance = ({ balance }: { balance?: { formatted: string; symbol: string } }) => {
  if (!balance) return null;
  const value = parseFloat(balance.formatted).toFixed(3);
  return <span>{value} {balance.symbol}</span>;
};


// --- MAIN WALLET COMPONENT ---
export const Wallet = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: ensName } = useEnsName({ address });
  const { connectors, connect, error, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // 2. Create a memoized list of connectors that excludes the generic "injected" one.
  const filteredConnectors = useMemo(() => {
    return connectors.filter(c => c.id !== 'injected');
  }, [connectors]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);


  if (isConnected) {
    return (
      <div style={styles.dropdownContainer} ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(prev => !prev)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ ...styles.button, ...(isHovering && styles.buttonHover) }}
        >
          <span>{ensName || `${address?.slice(0, 6)}...${address?.slice(-4)}`}</span>
          <EthBalance balance={balance} />
        </button>

        {isDropdownOpen && (
          <div style={styles.dropdownMenu}>
            <button
              onClick={() => {
                disconnect();
                setIsDropdownOpen(false);
              }}
              style={styles.disconnectButton}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsConnectModalOpen(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ ...styles.button, ...(isHovering && styles.buttonHover) }}
      >
        Connect Wallet
      </button>

      {isConnectModalOpen && (
        <div style={styles.modalBackdrop} onClick={() => setIsConnectModalOpen(false)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2 style={{marginTop: 0}}>Connect a Wallet</h2>
            
            {/* 3. Map over the NEW filtered list instead of the original one */}
            {filteredConnectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => {
                  connect({ connector });
                  setIsConnectModalOpen(false);
                }}
                style={styles.connectorButton}
              >
                {connector.name}
                {isPending && connector.id === connector.id && ' (Connecting...)'}
              </button>
            ))}

            {error && <p style={{color: 'red'}}>{error.message}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Wallet;