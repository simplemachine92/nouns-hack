// src/components/AuctionActivitySkeleton.tsx
import React from 'react';
// 1. Import the loading skull GIF
import loadingNoun from '../assets/loading-skull-noun.gif';

// Keyframes for the shimmer animation
const shimmerKeyframes = `
  @keyframes shimmer {
    0% { background-position: -468px 0; }
    100% { background-position: 468px 0; }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  // Main container matching AuctionActivity
  skeletonContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  // Base style for all shimmering placeholder elements
  placeholder: {
    animation: 'shimmer 1.5s linear infinite forwards',
    backgroundImage: 'linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%, #eeeeee 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '800px 104px',
    borderRadius: '4px',
    color: 'transparent', // Hide any text that might accidentally render
  },
  // Style for the title placeholder
  title: {
    height: '40px',
    width: '60%',
    marginBottom: '16px',
  },
  // 2. Updated Noun container: It's no longer a placeholder itself.
  nounContainer: {
    height: '0',
    paddingBottom: '100%', // Creates a square aspect ratio
    position: 'relative',
    marginBottom: '24px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#e2e8f0', // A fallback background color
  },
  // Styles for the info section below the Noun
  infoContainer: {
    display: 'flex',
    paddingBottom: '24px',
    borderBottom: '1px solid #E5E7EB',
  },
  infoBlock: {
    flex: 1,
  },
  infoLabel: {
    height: '16px',
    width: '80px',
    marginBottom: '8px',
  },
  infoValue: {
    height: '28px',
    width: '120px',
  },
  separator: {
    width: '1px',
    backgroundColor: '#E5E7EB',
    margin: '0 24px',
  },
};

export const AuctionActivitySkeleton = () => {
  return (
    <>
      <style>{shimmerKeyframes}</style>
      <div style={styles.skeletonContainer}>
        <div style={styles.nounContainer}>
          <img 
            src={loadingNoun}
            alt="Loading Noun..."
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <p style={{ margin: '8px 8px 8px 8px', fontSize: '0.9em', color: '#6b7280' }}>
          Please check your Graph URL in User Settings below.
        </p>

        {/* Shimmering Info Section */}
        <div style={styles.infoContainer}>
          <div style={styles.infoBlock}>
            <div style={{ ...styles.placeholder, ...styles.infoLabel }}></div>
            <div style={{ ...styles.placeholder, ...styles.infoValue }}></div>
          </div>
          <div style={styles.separator}></div>
          <div style={styles.infoBlock}>
            <div style={{ ...styles.placeholder, ...styles.infoLabel }}></div>
            <div style={{ ...styles.placeholder, ...styles.infoValue }}></div>
          </div>
        </div>
      </div>
    </>
  );
};