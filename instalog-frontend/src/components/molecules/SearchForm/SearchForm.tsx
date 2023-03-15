'use client'

import React from 'react'

type SearchFormProps = {
    setCurrentInput: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchForm({ setCurrentInput }: SearchFormProps) {
    return (
        <div className='col-span-10'>
            <input type="search" className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"
                placeholder="Search name, email or action..." required
                onChange={e => setCurrentInput(e.target.value)}
            />
        </div>
    )
}
