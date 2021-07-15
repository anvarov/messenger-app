import React, {useEffect} from 'react'
import useWindowSize from '../hooks/useWindowSize'
// import SearchInput from '../components/SearchInput'
// import MenuIcon from '../components/MenuIcon'
import ContactList from '../components/ContactList'
import Topbar from './Topbar'

function Sidebar() {
    const windowSize = useWindowSize()
    return (
        <div>
            <Topbar />
            <ContactList />
        </div>
)
}

export default Sidebar
