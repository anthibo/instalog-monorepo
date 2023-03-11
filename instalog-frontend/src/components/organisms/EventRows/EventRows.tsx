'use client'

import React, { useEffect, useState } from 'react'
import useSWRInfinite from "swr/infinite";

import { listEventsFetcher } from '@/requests/events.requests';
import { Event, FetchEventsResponse } from '@/types/event.types';

import EventRow from '@/components/molecules/EventRow/EventRow'
import { FetchEventResult } from 'next/dist/server/web/types';

const getKey = (pageIndex: number, previousPageData: FetchEventsResponse) => {
    if (previousPageData && !previousPageData.events) return null
    if (pageIndex === 0) return `/api/events`
    return `/api?events&occurred_after=${previousPageData.last_occurred_at}`
}
export default function EventsTableRows() {
    // const [events, setEvents] = useState<Event[]>([])
    const [lastOccurredAt, setLastOccurredAt] = useState<string>()
    const { data, size, setSize } = useSWRInfinite(getKey, listEventsFetcher(5, lastOccurredAt, {}))


    if(! data) {
        return <p>loading...</p>
    }
    return (
        <>
            {data && data.map((eventsData, i) => (
                eventsData.events.map((event, i) => {
                    <EventRow event={event} key={i} />
                } )
            ))}
            <button onClick={() => {setSize(size + 1)}}>Load More</button>
        </>
    )
}
