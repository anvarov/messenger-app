import React from 'react'
import Sidebar from './Sidebar'
import ConversationBoard from './ConversationBoard'
import Row from 'react-bootstrap/esm/Row'
import useWindowSize from '../hooks/useWindowSize'

function Dashboard() {
    const windowSize = useWindowSize()
    return (
        <Row>
            <Sidebar />
            {windowSize.width > 576 ? <ConversationBoard /> : null}
        </Row>
    )
}

export default Dashboard
