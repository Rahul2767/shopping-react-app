import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from '../features/usersApiSlice'
import { setCredentials } from '../features/authSlice'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            navigate('/')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <Container fluid className='bg-light'>
            <ToastContainer></ToastContainer>
            <Container className='d-flex justify-content-center'>
                <Form className='p-4 border rounded my-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Container fluid className='p-0 d-flex flex-column align-items-center justify-content-center'>
                        <Button variant="primary" type="submit" onClick={submitHandler}>
                            Login
                        </Button>
                        {isLoading ? <div class="spinner-border text-success my-2" role="status">
                            <span class="sr-only"></span>
                        </div>  : ''}
                    </Container>
                    <Form.Text>Don't have any account? {' '} <Link to={'/signup'}>Signup</Link></Form.Text>
                </Form>
                
            </Container>
            
        </Container>
    )
}

export default Login
