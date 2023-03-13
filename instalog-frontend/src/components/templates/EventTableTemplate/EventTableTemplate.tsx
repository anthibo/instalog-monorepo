'use client'

import React, { useEffect, useState } from 'react'
import useSWRInfinite from "swr/infinite";

import { buildEventsParamsString, getEventQueryKey, listEventsFetcher } from '@/requests/events.fetcher';
import { EventQueryParams, FetchEventsResponse } from '@/types/event.types';

import EventsTableRows from '@/components/organisms/EventRows/EventRows';
import EventTableColumns from '@/components/organisms/EventTableColumns/EventTableColumns';
import SearchForm from '@/components/organisms/SearchForm/SearchForm';



export default function EventTableTemplate() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [shouldLoadMore, setShouldLoadMore] = useState(false)
    
    const eventParams: EventQueryParams = {
        search: searchTerm,
        // we add the rest of query params here (If I implemented api filtering for FE, I will remove this comment :D)
    }

    const { data, size, setSize } = useSWRInfinite(getEventQueryKey(buildEventsParamsString(eventParams)), listEventsFetcher)

    useEffect(() => {
        if (data && data[size - 1].last_occurred_at !== null) {
            setShouldLoadMore(true)
        } else {
            setShouldLoadMore(false)
        }
    }, [data])

    return (
        <div className="relative overflow-x-auto">
            <SearchForm setSearchTerm={setSearchTerm}/>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <EventTableColumns />
                <tbody>
                    <EventsTableRows data={data} setSize={setSize} size={size} shouldLoadMore={shouldLoadMore}/>
                </tbody>
            </table>
        </div>
    )
}
