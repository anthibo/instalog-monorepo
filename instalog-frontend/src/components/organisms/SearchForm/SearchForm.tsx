'use client'

import React, { useEffect, useState } from 'react'
import { TfiExport } from 'react-icons/tfi'
import { GoPrimitiveDot } from 'react-icons/go'

import SearchForm from '@/components/molecules/SearchForm/SearchForm';
import { FetchEventsResponse } from '@/types/event.types';
import SearchButtonsGroup from '../SearchButtonsGroup/SearchButtonsGroup';


type SearchFormProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    data: FetchEventsResponse[] | undefined;
}

export default function SearchGroup({ setSearchTerm, data }: SearchFormProps) {
    const [currentInput, setCurrentInput] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(currentInput)
        }, 500)
        return () => clearTimeout(timer)
    }, [currentInput])

    return (
        <div className="grid grid-cols-12 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3">
            <SearchForm setCurrentInput={setCurrentInput} />
            <div className='col-span-3'>
                <SearchButtonsGroup data={data} />
            </div>
        </div>
    )
}
