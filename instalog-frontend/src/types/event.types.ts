import { Action } from "./action.types";
import { Actor } from "./actor.types";

export type Event = {
    id: string,
    group: string,
    actor_id: string,
    action_id: string,
    target_id: string,
    target_name: string,
    location: string,
    occurred_at: string,
    metadata: any,
    actor: Actor,
    action: Action,
}

export type EventFilterParams = {
    actor_id: string;
    action_id: string;
    action_name: string;
    target_id: string;
}

export type FetchEventsResponse = {
    events: Event[],
    last_occurred_at: string
}
