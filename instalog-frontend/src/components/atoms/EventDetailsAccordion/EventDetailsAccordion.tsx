'use client'

import { Event } from '@/types/event.types'
import { Accordion } from 'flowbite-react'
import React from 'react'

type EventDetailsTooltipProps = {
    event: Event
}

export default function EventDetailsAccordion({event}:EventDetailsTooltipProps) {
    return (
        <Accordion>
            <Accordion.Panel>
                <Accordion.Title className='w-1/'>
                    expand details
                </Accordion.Title>
                <Accordion.Content>
                    <div className='caret-red-300s'>
                    <p>id: {event.id}</p>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
