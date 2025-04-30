'use client';

import { useGetTrip } from '@/lib/api';
import { useParams } from 'next/dist/client/components/navigation';
import React from 'react';

const TripDetail = () => {
  const params = useParams();
  const id = params?.id;
  if (!id) return <div>No trip ID provided</div>;
  const { data: tripData, isPending, isError } = useGetTrip(id as string);
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }}>
    <h1>{tripData?.title}</h1>
    <p>{tripData?.description}</p>
</div>;
};

export default TripDetail;