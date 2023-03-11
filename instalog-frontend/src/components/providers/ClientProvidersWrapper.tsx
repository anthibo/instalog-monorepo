'use client'

import React from 'react'
import { SWRConfig } from 'swr'

type Props = {
    children: React.ReactNode
}
export default function ClientProvidersWrapper({ children }: Props) {
    return (
        <SWRConfig>
            {children}
        </SWRConfig>
    )
}
