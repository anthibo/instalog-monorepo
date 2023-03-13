'use client'

import React, { useEffect, useState } from 'react'
import { TfiExport } from 'react-icons/tfi'
import { GoPrimitiveDot } from 'react-icons/go'

import { Button } from 'flowbite-react';


function SearchFormButtonsGroup() {
    return (
        <Button.Group className='w-full'>
            <Button color="gray" className='text-sm px-1' >
                Export
                <TfiExport className='ml-2 mb-0.5' />
            </Button>
            <Button color="gray" className='px-1'>
                Live
                <GoPrimitiveDot className='text-red-900' size={20} />
            </Button>
        </Button.Group>
    )
}

export type SearchFormProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchForm({ setSearchTerm }: SearchFormProps) {
    const [currentInput, setCurrentInput] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(currentInput)
        }, 500)
        return () => clearTimeout(timer)
    }, [currentInput])

    return (
        <div className="grid grid-cols-12 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3">
            <div className='col-span-9'>
                <input type="search" className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"
                    placeholder="Search name, email or action..." required
                    onChange={e => setCurrentInput(e.target.value)}
                />
            </div>
            <div className='col-span-3'>
                <SearchFormButtonsGroup />
            </div>
        </div>
    )
}
