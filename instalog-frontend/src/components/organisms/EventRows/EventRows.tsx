'use client'

import React from 'react'
import useSWRInfinite from "swr/infinite";

import { listEventsFetcher2 } from '@/requests/events.requests';
import { FetchEventsResponse } from '@/types/event.types';

import EventRow from '@/components/molecules/EventRow/EventRow'

const getKey = (pageIndex: number, previousPageData: FetchEventsResponse) => {
    if (previousPageData && !previousPageData.last_occurred_at) return null
    if (pageIndex === 0) return `events?batchSize=5`
    return `events?batchSize=5&occurred_after=${previousPageData.last_occurred_at}`
}
export default function EventsTableRows() {
    const { data, size, setSize } = useSWRInfinite(getKey, listEventsFetcher2)

    return (
        <>
            {data && data.map((eventsData) => (
                eventsData.events.map((event, i) => {
                    return <EventRow event={event} key={i} />
                })
            ))}
            { }
            <button onClick={() => { setSize(size + 1) }}>Load More</button>
        </>
    )
}
