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
            <Nav.Link><Navbar.Brand className='ms-2'> <Link to={'/'}><img
                src='https://www.liblogo.com/img-logo/max/fl326fc7d-flipkart-logo-flipkart-logo-png-transparent-brands-logos.png'
                height='40'
                width='150'
                alt=''
                loading='lazy'
            /></Link></Navbar.Brand></Nav.Link>

            <Form className="d-flex me-3 align-items-center">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='me-2 py-1'
                />
            </Form>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {userInfo === null ?
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">

                        <Nav.Link>
                            <Link to={'/signup'}>
                                <i className="bi bi-person-plus-fill">{" "}Sign Up</i>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={'/login'}>
                                <i className="bi bi-box-arrow-right">{" "}Log In</i>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                :
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">

                        <NavDropdown title={userInfo === null ? 'Account' : <i className="bi bi-person my-auto p-2">{userInfo.name}</i>} id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={'/orders'}>My orders</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={'/profileUpdate'}>Profile update</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={'/support'}>Support</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={'/feedback'}>Feedback</Link></NavDropdown.Item>
                        </NavDropdown>


                        <Nav.Link><Link to={'/cart'} className='text-secondary'><i className="bi bi-cart4 my-auto p-2">Cart</i>{cartItems.length > 0 ? <Badge bg="success">{cartItems.length}</Badge> : ''}</Link></Nav.Link>

                        {
                            userInfo === null ? <Nav.Link><i class="bi bi-box-arrow-right p-2">Login</i></Nav.Link> :
                                <Nav.Link onClick={logoutHandler}><i class="bi bi-box-arrow-right p-2">Logout</i></Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>}

        </Navbar>
    )
}

export default NavBar