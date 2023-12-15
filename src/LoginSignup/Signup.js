import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { setCredentials } from '../features/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useSignupMutation } from '../features/usersApiSlice'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'


function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signup] = useSignupMutation()

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const signupSubmitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!")
        } else {
            try {
                const res = await signup({ name, email, password }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate('/')
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }

    return (
        <Container fluid className='p-0 bg-light'>
            <ToastContainer></ToastContainer> 
            <Container className='d-flex justify-content-center'>
                <Form className='p-4 border rounded my-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Container fluid className='p-0 d-flex justify-content-center'>
                        <Button variant="primary" type="submit" onClick={signupSubmitHandler}>
                            SignUp
                        </Button>
                    </Container>
                    <Form.Text>Already have an account? {' '} <Link to={'/login'}>Login</Link></Form.Text>
                </Form>
            </Container>
        </Container>
    )
}

export default Login
