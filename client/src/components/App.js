import React from 'react'
import {useAuthContext} from '../context/auth-context'
import Login from '../screens/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
    const {user} = useAuthContext()
    const AuthenticatedApp = (
        <Container className='d-flex flex-column' style={{height: '100vh' }}>
            <h2 className='align-self-center p-3' >Messenger App</h2>
            <Row  className='align-items-center' style={{height: '70%' }} >
                <Col md={6} className='m-auto'>   
                    <Login />
                </Col>
            </Row>
        </Container>
    )
    return (
        user ? AuthenticatedApp : <div>noo</div>
    )
    
}

export default App
