// 'use client'

import ActorAvatar from "@/components/atoms/ActorAvatar/ActorAvatar";
import { listEventsFetcher } from "@/requests/events.requests";
import EventRow from "@/components/molecules/EventRow/EventRow";
import EventTableTemplate from "@/components/templates/EventTable/EventTable";

export default function HomePage() {
    return (
        <EventTableTemplate/>
    );
}