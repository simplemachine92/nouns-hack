// src/components/Countdown.tsx
import React, { useState, useEffect } from 'react';

// Styles updated to match the screenshot's aesthetic
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'baseline', // Aligns numbers and units nicely
  },
  timeValue: {
    fontWeight: 700,
    fontSize: '28px',
    color: '#111827',
  },
  timeUnit: {
    fontSize: '28px',
    fontWeight: 400,
    color: '#6B7280', // Lighter gray for units like 'h', 'm', 's'
    marginLeft: '2px',
    marginRight: '8px',
  },
};

interface CountdownProps {
  /** The auction end time as a Unix timestamp in seconds */
  endTime: number;
}

export const Countdown = ({ endTime }: CountdownProps) => {
  const [remaining, setRemaining] = useState(endTime * 1000 - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemaining = endTime * 1000 - Date.now();
      setRemaining(newRemaining > 0 ? newRemaining : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  if (remaining <= 0) {
    return (
      <div style={styles.container}>
        <span style={styles.timeValue}>0</span>
        <span style={styles.timeUnit}>s</span>
      </div>
    );
  }

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  // Render in the "Xh Ym Zs" format
  return (
    <div style={styles.container}>
      {hours > 0 && (
        <>
          <span style={styles.timeValue}>{hours}</span>
          <span style={styles.timeUnit}>h</span>
        </>
      )}
      {/* Always show minutes if hours are shown */}
      {(minutes > 0 || hours > 0) && (
        <>
          <span style={styles.timeValue}>{minutes}</span>
          <span style={styles.timeUnit}>m</span>
        </>
      )}
      <span style={styles.timeValue}>{seconds}</span>
      <span style={styles.timeUnit}>s</span>
    </div>
  );
};