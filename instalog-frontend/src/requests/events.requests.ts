import { Event, EventFilterParams, FetchEventsResponse } from "@/types/event.types";
import { config } from "@/utils/config";

const eventsApiUrl = `${config.instalogApiUrl}/events`;

export const listEventsFetcher = (batchSize: number = 10, occurred_after?: string, filterParams?: Partial<EventFilterParams>) => {
    return async() => {
        const fetchEventsUrl = new URL(eventsApiUrl);
        fetchEventsUrl.searchParams.append('batchSize', batchSize.toString());
        if (occurred_after) {
            fetchEventsUrl.searchParams.append('occurred_after', occurred_after);
        }
        const fetchEventsUrlString = fetchEventsUrl.toString()
        const response = await fetch(fetchEventsUrlString, {
            method: 'GET',
            cache: 'reload'
        })
        const data = await response.json()
        return data as FetchEventsResponse
    }
}

export const listEventsFetcher2 = (batchSize: number = 10, occurred_after?: string, filterParams?: Partial<EventFilterParams>) => {
    return async() => {
        const fetchEventsUrl = new URL(eventsApiUrl);
        fetchEventsUrl.searchParams.append('batchSize', batchSize.toString());
        if (occurred_after) {
            fetchEventsUrl.searchParams.append('occurred_after', occurred_after);
        }
        const fetchEventsUrlString = fetchEventsUrl.toString()
        const response = await fetch(fetchEventsUrlString, {
            method: 'GET',
            cache: 'reload'
        })
        const data = await response.json()
        return data as FetchEventsResponse
    }
}