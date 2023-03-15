'use client'

import React, { useEffect, useState } from 'react'

import SearchForm from '@/components/molecules/SearchForm/SearchForm';
import { FetchEventsResponse } from '@/types/event.types';
import SearchButtonsGroup from '../../molecules/SearchButtonsGroup/SearchButtonsGroup';


type SearchGroupProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    data: FetchEventsResponse[] | undefined;
}

export default function SearchGroup({ setSearchTerm, data }: SearchGroupProps) {
    const [currentInput, setCurrentInput] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(currentInput)
        }, 500)
        return () => clearTimeout(timer)
    }, [currentInput])

    return (
        <div className="grid grid-cols-12 text-gray-700 uppercase bg-gray-50  dark:text-gray-400 p-2">
            <SearchForm setCurrentInput={setCurrentInput} />
            <div className='col-span-2'>
                <SearchButtonsGroup data={data} />
            </div>
        </div>
    )
}
