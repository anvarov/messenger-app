import React, {useState, useContext} from 'react'


const AuthContext = React.createContext()

export default function AuthProvider({children}) {
    const [user, setUser] = useState('Akmal')
    const value = {user, setUser} 
    return (
        <AuthContext.Provider value={value} children={children}/>
    )
}

export function useAuthContext() {
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error('This component should be used inside AuthContext')
    }
    return context
}
