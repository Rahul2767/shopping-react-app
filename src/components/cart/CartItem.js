import React from 'react'
import './cart.css'
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/FilterSort/FilterSortSlice';

function CartItem(props) {
    const dispatch = useDispatch()
    const removeItemHandler = () => {
        dispatch(removeFromCart(props.id))
    }

    return (
        <div className="card w-100 cart-item mb-1">
            <div className="card-body">
                <div className='row'>
                    <div className='col-lg-7'>
                        <Badge bg="success">Offer {Math.ceil(props.discount)} % Off applied</Badge>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className='col-lg-2 text-center d-flex flex-column align-items-center justify-content-start'>
                        <strong ><h6 >Quantity</h6></strong>
                        <p className='text-primary fs-5 border p-1'>{props.quantity}</p>
                    </div>
                    <div className='col-lg-2 text-center d-flex flex-column align-items-center justify-content-start'>
                        <strong ><h6>Price</h6></strong>
                        <del className='fs-5'>${props.price}</del>
                        <p className='text-primary fs-4'>${Math.floor(props.price - props.price * props.discount / 100)}</p>
                    </div>
                    <div className='col-lg-1 text-center d-flex align-items-center justify-content-center'>
                        <i className="bi bi-x-circle-fill text-danger fs-5" onClick={removeItemHandler}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
