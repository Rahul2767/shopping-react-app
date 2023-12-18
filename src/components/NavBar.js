import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useLogoutMutation } from '../features/usersApiSlice';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/esm/Badge';

function NavBar() {
    const userInfo = useSelector((state) => state.auth.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logoutApiCall] = useLogoutMutation()
    const cartItems = useSelector((state) => state.FilterSort.cartItems)

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary position-sticky fixed-top border">
            <Container fluid>
                <Nav.Link><Navbar.Brand className='ms-2'> <Link to={'/'}><img
                    src='https://www.liblogo.com/img-logo/max/fl326fc7d-flipkart-logo-flipkart-logo-png-transparent-brands-logos.png'
                    height='40'
                    width='150'
                    alt=''
                    loading='lazy'
                /></Link></Navbar.Brand></Nav.Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {userInfo === null ?
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <i className="bi bi-person-plus-fill my-auto ms-2"></i>
                            <Nav.Link><Link to={'/signup'}>Signup </Link></Nav.Link>
                            <i className="bi bi-box-arrow-right my-auto ms-3"></i>
                            <Nav.Link><Link to={'/login'}>Login </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    :
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Form className="d-flex me-3 align-items-center">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className='me-2 py-1'
                                />
                            </Form>
                            <i className="bi bi-person my-auto ms-3"></i>
                            <NavDropdown title={userInfo === null ? 'Account' : userInfo.name} id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={'/orders'}>My orders</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/profileUpdate'}>Profile update</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/support'}>Support</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/feedback'}>Feedback</Link></NavDropdown.Item>
                            </NavDropdown>

                            <div className='d-flex flex-column align-items-center ms-3'>
                                {cartItems.length > 0 ? <Badge bg="success">{cartItems.length}</Badge> : ''}
                                <i className="bi bi-cart4 my-auto"></i>
                            </div>

                            <Nav.Link >
                                <Link to={'/cart'} className='text-secondary'> Cart</Link>
                            </Nav.Link>


                            <i className="bi bi-box-arrow-left my-auto ms-3"></i>
                            {
                                userInfo === null ? <Nav.Link>Login</Nav.Link> :
                                    <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>}
            </Container>
        </Navbar>
    )
}

export default NavBar