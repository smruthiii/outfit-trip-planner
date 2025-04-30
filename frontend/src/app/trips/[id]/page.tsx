import TripDetail from '@/components/TripDetail';
import React from 'react';


const TripPage = () => {
  return (<div
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
      <TripDetail />
    </div>
  );
};

export default TripPage;