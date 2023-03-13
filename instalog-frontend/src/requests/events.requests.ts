import { FetchEventsResponse } from "@/types/event.types";
import { config } from "@/utils/config";
import { Fetcher } from "swr";


export const listEventsFetcher: Fetcher<FetchEventsResponse> = (key: string) => fetch(`${config.instalogApiUrl}/${key}`).then(response => response.json())