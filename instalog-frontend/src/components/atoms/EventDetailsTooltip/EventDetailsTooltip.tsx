'use client'

import 'react-tooltip/dist/react-tooltip.css'

import React from 'react'
import { Tooltip } from 'react-tooltip'

import { Event } from '@/types/event.types'


type EventDetailsTooltipProps = {
    event: Event
}

const tooltipStyle = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
export default function EventDetailsTooltip({event}: EventDetailsTooltipProps) {
    return (
        <Tooltip anchorSelect={`#${event.id}`} place="top" className={tooltipStyle}>
           eventId: ${event.id}
        </Tooltip>
    )
}
