import React from 'react'
import {useAuthContext} from '../context/auth-context'
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
    const {user} = useAuthContext()

    return (
        <Container fluid className='d-flex flex-column' style={{height: '100vh' }}>
            <Row  className='align-items-center' style={{height: '95%' }} >
                <Col md={6} className='m-auto'>   
                 {true ? <Dashboard /> : <Login />}
                </Col>
            </Row>
        </Container>
    )
}

export default App
