import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import './products.css'
import { addToCart } from '../../features/FilterSort/FilterSortSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

function Product(props) {
    const rating = props.rating
    const fullStars = Number(Math.floor(rating));
    const halfStar = (rating - fullStars) > 0.50 ? false : true
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [addedNotification, setaddedNotification] = useState(false);

    const showNotification = () => {
        setaddedNotification(!addedNotification)
        setTimeout(() => {
            setaddedNotification(false)
        }, 1000);
    }

    const addToCartHandler = () => {
        if (userInfo) {
            showNotification()
            dispatch(addToCart({ ...props }))
        }
        else {
            navigate('/login')
        }
    }

    const buyNowHandler = () => {
        if (userInfo) {
            dispatch(addToCart({ ...props }))
            navigate('/cart')
        }
        else {
            navigate('/login')
        }
    }

    return (
        <Card className='product-card position-relative'>
            <Card.Img onClick={() => { props.showImages(props.id) }} variant="top" src={props.thumbnail} style={{ height: 170 }} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Container fluid className='p-0'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className='fs-6'>
                        {props.description}
                    </Card.Text>
                </Container >

                <Container fluid className='position-relative px-0 border-0'>
                    <Toast show={addedNotification} onClose={showNotification} className='border-0' >
                        <Toast.Body className='bg-warning position-absolute w-100 text-center fs-5 rounded'>Item added to cart!</Toast.Body>
                    </Toast>
                </Container>

                <Container fluid className='p-0'>
                    <Container fluid className='d-flex flex-column justify-content-between align-items-center p-0 py-2'>
                        <Container fluid className='p-0 mt-1'>
                            Rating : &nbsp;
                            {[...Array(fullStars)].map((key) => <i className="bi bi-star-fill" ></i>)}
                            {halfStar ? <i className="bi bi-star-half"></i> : <i className="bi bi-star-fill"></i>}
                        </Container>
                        <Container fluid className='p-0 mt-1 d-flex justify-content-between align-items-center p-0 py-2'>
                            <Container fluid className='p-0'>
                                <del><h6 className=" m-0"><span>&#36;</span>{props.price}</h6></del>
                                <Badge bg="success">{Math.ceil(props.discount)} % Off</Badge>
                                <h5 className=" m-0"><span>&#36;</span>{Math.ceil(props.price - props.price * props.discount / 100)}</h5>
                            </Container>
                            <Container fluid className='p-0'>
                                <p className='m-0 text-end'>In Stock<span className="badge bg-danger mx-1">{props.stock}</span></p>
                            </Container>
                        </Container>
                    </Container>
                    <Container fluid className='p-0 d-flex justify-content-between'>
                        <Button onClick={buyNowHandler} variant="outline-success">Buy Now</Button>
                        <Button onClick={addToCartHandler} variant="outline-primary">Add to Cart</Button>
                    </Container>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Product