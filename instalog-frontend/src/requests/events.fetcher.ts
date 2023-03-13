import { EventQueryParams, FetchEventsResponse } from "@/types/event.types";
import { config } from "@/utils/config";
import { Fetcher } from "swr";

const eventsApi = `${config.instalogApiUrl}/events`

export const getEventQueryKey = (queryParamsString: string) => (pageIndex: number, previousPageData: FetchEventsResponse) => {
    if (previousPageData && !previousPageData.last_occurred_at) return null
    if (pageIndex === 0) return `${queryParamsString}`
    return `${queryParamsString}&occurred_after=${previousPageData.last_occurred_at}`
}

export const buildEventsParamsString = (params: EventQueryParams) => {
        const eventURL = new URL(`${eventsApi}`)

        eventURL.searchParams.append('batchSize', '5')
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

        if(params.search){
            eventURL.searchParams.append('search', params.search)
        }

        return eventURL.searchParams.toString()
}

export const listEventsFetcher: Fetcher<FetchEventsResponse> =
    (queryParams: string) => fetch(`${eventsApi}?${queryParams}`)
        .then(response => response.json())