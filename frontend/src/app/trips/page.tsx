import TripsList from '@/components/TripsList';
import React from 'react';

const TripDetailPage = (): React.ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '33%',
        margin: '0 auto',
        gap: '50px',
      }}>
      <h1>My Trips</h1>
      <TripsList />
    </div>
  );
};

export default TripDetailPage;
