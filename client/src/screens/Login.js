import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import Row from 'react-bootstrap/esm/Row'
import Logo from '../components/Logo'



export default function Login(){
    const [showSignUp, setShowSignUp] = useState(false)
    function handleSignUp(e){
        e.preventDefault()
        setShowSignUp(state => !state)
    }
    return (
            <Row>
                <Logo />
                <Form>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' placeholder='Username' />
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                    <Collapse in={showSignUp}>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>
                    </Collapse>
                    <Form.Group controlId='rememberMe'>
                        <Form.Check type='checkbox' label='Remember Me' />
                    </Form.Group>
                    <Form.Group className='d-flex'>
                        <Button className='me-2' variant='primary' type='submit'>Login</Button>
                        <Button className='me-2' variant='secondary'onClick={(e) => handleSignUp(e)} type='submit'>Sign Up</Button>
                    </Form.Group>
                </Form>
            </Row>
   
    )
}