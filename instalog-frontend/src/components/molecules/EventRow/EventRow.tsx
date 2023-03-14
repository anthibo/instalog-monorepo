'use client'

import React, { useState } from 'react'

import { Button } from 'flowbite-react'
import { CgArrowsExpandRight } from 'react-icons/cg'
import moment from 'moment';


import ActorAvatar from '@/components/atoms/ActorAvatar/ActorAvatar'
import { Event } from '@/types/event.types'
import EventDetailsTooltip from '@/components/atoms/EventDetailsTooltip/EventDetailsTooltip'
import EventDetailsAccordion from '@/components/atoms/EventDetailsAccordion/EventDetailsAccordion'
import EventDetailsModal from '@/components/atoms/EventDetailsModal/EventDetailsModal'


type EventRowProps = {
    event: Event
}

export default function EventRow({ event }: EventRowProps) {
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" id={event.id}>
            <td className="px-6 py-4 font-medium text-gray-900">
                <ActorAvatar actorInitials={event.actor.name[0].toUpperCase()} />
                {event.actor.name}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900">
                {event.action.name}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900">
                {moment(event.occurred_at).format('LLL')}
            </td>
            <td>
                <Button onClick={() => setShowDetailsModal(true)} color='light'>
                    Show details <CgArrowsExpandRight className='ml-2'/>
                </Button>
            </td>
            <EventDetailsModal event={event} showModal={showDetailsModal} setShowModal={setShowDetailsModal} />
        </tr>
    )
}
