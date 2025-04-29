import { useMutation, useQuery } from '@tanstack/react-query';
import { Trip, TripResponse } from './types';

const host = 'http://localhost:8000';
export const useCreateTrip = () => {
  return useMutation<TripResponse, Error, Trip>({
    mutationFn: async (newTrip: Trip) => {
      const response = await fetch(`${host}/trips/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newTrip),
      });
      if (!response.ok) {
        throw new Error('Failed to create trip');
      }
      return response.json();
    },
  });
};

export const useGetTrips = () => {
  return useQuery<TripResponse[]>({
    queryKey: ['trips'],
    queryFn: async () => {
      const response = await fetch(`${host}/trips`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create trip');
      }
      return response.json();
    },
  });
};
