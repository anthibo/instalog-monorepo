'use client'

import React from 'react'

import { FetchEventsResponse } from '@/types/event.types';

import EventRow from '@/components/molecules/EventRow/EventRow'
import { Button } from 'flowbite-react';

type EventsTableRowsProps = {
    data: FetchEventsResponse[] | undefined;
    setSize: (size: number) => any;
    size: number;
    shouldLoadMore: boolean;
}

export default function EventsTableRows({ data, setSize, shouldLoadMore, size }: EventsTableRowsProps) {
    return (
        <>
            {(!data || data[0].events.length < 1) && (
                <tr>
                    <td colSpan={3} className='text-center'>
                        <h1 className='text-black mt-10 font-black'>
                            There is no events right now! Activate Live Mode to receive events in realtime 🚀.
                        </h1>
                    </td>
                </tr>
            )}

            {data && data.map((eventsData) => (
                eventsData.events.map((event, i) => {
                    return <EventRow event={event} key={i} />
                })
            ))}

            <tr>
                <td colSpan={4}>
                    {
                        shouldLoadMore &&
                        (
                            <div className='mt-3 w-full'>
                                <Button
                                    color="light"
                                    className='w-full text-center bg-gray-500 text-gray-600'
                                    onClick={() => setSize(size + 1)}
                                >
                                    Load More...
                                </Button>
                            </div>
                        )
                    }
                </td>
            </tr>
        </>
    )
}
