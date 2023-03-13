'use client'

import React from 'react'

import ActorAvatar from '@/components/atoms/ActorAvatar/ActorAvatar'
import { Event } from '@/types/event.types'
import EventDetailsTooltip from '@/components/atoms/EventDetailsTooltip/EventDetailsTooltip'
import EventDetailsAccordion from '@/components/atoms/EventDetailsAccordion/EventDetailsAccordion'

type EventRowProps = {
    event: Event
}
// TODO: FORMAT DATE
// TODO: Show event details on hover
export default function EventRow({ event }: EventRowProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" id={event.id}>
            <td className="px-6 py-4 font-medium text-gray-900">
                <ActorAvatar actorInitials={event.actor.name[0].toUpperCase()} />
                {event.actor.name}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900">
                {event.action.name}
            </td>
            {/* Aug 7, 2:22 PM */} {/* M D, Time */}
            <td className="px-6 py-4 font-medium text-gray-900">
                {/* use moment js here */}
                {new Date(event.occurred_at).toString()}
            </td>
            <EventDetailsTooltip event={event} />
            {/* <EventDetailsAccordion event={event}/> */}
        </tr>
    )
}
