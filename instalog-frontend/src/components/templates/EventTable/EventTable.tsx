'use client'

import React from 'react'

import EventsTableRows from '@/components/organisms/EventRows/EventRows';
import EventTableColumns from '@/components/organisms/EventTableColumns/EventTableColumns';



export default function EventTableTemplate() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <EventTableColumns />
                <tbody>
                    <EventsTableRows />
                </tbody>
            </table>
            <button>Load more</button>
        </div>
    )
}
