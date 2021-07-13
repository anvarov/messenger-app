import React from 'react'
import AuthProvider from './auth-context'

export default function AppProviders(props) {
    return (
        <>
            <AuthProvider {...props} />
        </>
    )
}

