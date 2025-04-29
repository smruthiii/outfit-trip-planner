'use client';

import { useGetTrips } from '@/lib/api';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const TripsList = (): React.ReactElement => {
  const { data: allTrips, isPending, isSuccess } = useGetTrips();

  if (isPending) return <div>Loading...</div>;
  if (!isSuccess) return <div>Error loading trips</div>;

  return (
    <Accordion type='single' collapsible style={{ width: '33%' }}>
      {allTrips?.map((trip) => (
        <AccordionItem
          key={`item-${trip.id}`}
          value={`item-${trip.id}`}
          style={{ width: '100%' }}>
          <AccordionTrigger>{trip.title}</AccordionTrigger>
          <AccordionContent>{trip.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TripsList;
