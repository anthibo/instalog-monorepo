'use client'

import { Event, FetchEventsResponse } from "@/types/event.types";
import { Button } from "flowbite-react";
import { GoPrimitiveDot } from "react-icons/go";
import { TfiExport } from "react-icons/tfi";
import { CSVDownload, CSVLink } from "react-csv";
import { useEffect, useState } from "react";


type SearchButtonsGroup = {
    data: FetchEventsResponse[] | undefined;
}

const prepareDataToCSV = (fetchData: FetchEventsResponse[] | undefined) => {
    if (fetchData === undefined) {
        return { data: [] }
    }
    const data = fetchData.flatMap(fetchEventData => fetchEventData.events).flat()
    console.log(data);
    return { data }
}

const headers = [
    { label: "ID", key: "id" },
    { label: "Group", key: "group" },
    { label: "Actor ID", key: "actor.id" },
    { label: "Actor Email", key: "actor.email" },
    { label: "Actor Name", key: "actor.name" },
    { label: "Target ID", key: "target_id" },
    { label: "Target Name", key: "target_name" },
    { label: "Location", key: "location" },
    { label: "Date", key: "occurred_at" },
]

export default function SearchButtonsGroup({ data: fetchData }: SearchButtonsGroup) {
    const [preparedData, setPreparedData] = useState<Event[]>([])
    useEffect(() => {
        const { data } = prepareDataToCSV(fetchData)
        setPreparedData(data)
    }, [fetchData])
    console.log(preparedData)
    return (
        <Button.Group className='w-full'>
            <CSVLink data={preparedData} headers={headers} filename="events">
                <Button color="gray" className='text-sm px-1'>
                    Export
                    <TfiExport className='ml-2 mb-0.5' />
                </Button>
            </CSVLink>
            <Button color="gray" className='px-1'>
                Live
                <GoPrimitiveDot className='text-red-900' size={20} />
            </Button>
        </Button.Group>
    )
}