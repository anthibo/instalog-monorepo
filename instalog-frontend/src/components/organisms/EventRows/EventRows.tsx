'use client'

import React, { useEffect, useMemo, useState } from 'react'
import useSWRInfinite from "swr/infinite";

import { listEventsFetcher } from '@/requests/events.requests';
import { Event, EventQueryParams, FetchEventsResponse } from '@/types/event.types';

import EventRow from '@/components/molecules/EventRow/EventRow'
import { Button } from 'flowbite-react';

const getKey = (url: string) => (pageIndex: number, previousPageData: FetchEventsResponse) => {
    if (previousPageData && !previousPageData.last_occurred_at) return null
    if (pageIndex === 0) return url
    return `${url}&occurred_after=${previousPageData.last_occurred_at}`
}

const buildEventKey = (params?: EventQueryParams) => {
    const eventUrlKey = 'events?batchSize=5'
    if(!params) return eventUrlKey;
    else{
        const eventURL = new URL(eventUrlKey)
        if(params.action_id){
            eventURL.searchParams.append('action_id', params.action_id)
        }
        if(params.action_name){
            eventURL.searchParams.append('action_name', params.action_name)
        }
        if(params.actor_id){
            eventURL.searchParams.append('action_name', params.actor_id)
        }
        if(params.target_id){
            eventURL.searchParams.append('action_name', params.target_id)
        }
        return eventURL.toString()
    }
}
export default function EventsTableRows() {
    const { data, size, setSize } = useSWRInfinite(getKey('events?batchSize=5'), listEventsFetcher)
    const [shouldLoadMore, setShouldLoadMore] = useState(false)

    useEffect(() => {
        if (data && data[size - 1].last_occurred_at !== null) {
            setShouldLoadMore(true)
        } else {
            setShouldLoadMore(false)
        }
    }, [data])

    return (
        <>
            {data && data.map((eventsData) => (
                eventsData.events.map((event, i) => {
                    return <EventRow event={event} key={i} />
                })
            ))}
            <tr>
                <td colSpan={3}>
                    {
                        shouldLoadMore &&
                        (
                            <div className='mt-3 w-full'>
                                <Button
                                    color="light"
                                    className='ml-24 w-10/12 text-center bg-gray-500 text-gray-600'
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
