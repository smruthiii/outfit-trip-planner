'use client';

import React from 'react';
import { useCreateTrip } from '@/lib/api';
import { Trip } from '@/lib/types';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation'; // ✅

interface FormData {
  tripTitle: string;
  tripDescription: string;
}

const CreateTripForm = (): React.ReactElement => {
  const form = useForm<FormData>();
  const router = useRouter();
  const { mutate: createTrip, isError, isPending } = useCreateTrip();

  const handleSubmit = (data: FormData) => {
    const newTrip = {
      title: data.tripTitle,
      description: data.tripDescription,
    };
    createTrip(newTrip, {
      onSuccess: (data) => {
        // todo: update to trip detail page
        router.push(`/trips`);
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <FormField
          name='tripTitle'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Trip Title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='tripDescription'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder='Trip Description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isPending || isError}>
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
        {isError && (
          <p
            style={{
              color: 'red',
            }}>
            Error creating trip...
          </p>
        )}
      </form>
    </FormProvider>
  );
};
export default CreateTripForm;
