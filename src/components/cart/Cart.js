import React from 'react'
import { Button, Container } from 'react-bootstrap'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useCreateOrderMutation } from '../../features/usersApiSlice';
import { emptyCart } from '../../features/FilterSort/FilterSortSlice';
function Cart() {
  const email = useSelector((state) => state.auth.userInfo.email)
  const cartItems = useSelector((state) => state.FilterSort.cartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [createOrder] = useCreateOrderMutation();
  const initialSum = 0;
  const OrderTotal = cartItems.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.product.price * currentValue.quantity),
    initialSum,
  );
  const orderDiscount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + ((currentValue.product.price * currentValue.product.discount) / 100),
    initialSum,
  );
  const totalAmount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.product.price - (currentValue.product.price * currentValue.product.discount) / 100),
    initialSum,
  );
  const placeOrderHandler = async (e) => {
    e.preventDefault()
    try {
      await cartItems.forEach(async element => {
        const res = await createOrder({ orderedBy: email, productId: element.product.id, productTitle: element.product.title, productPrice: element.product.price }).unwrap()
      console.log(res)
      });
      navigate('/thanks')
      dispatch(emptyCart())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container className='row mx-auto'>
      <h1 className="display-6 text-center border-bottom">Shopping Cart</h1>
      <Container className='col-lg-8'>
        {
          cartItems.length > 0 ?
            cartItems.map(item => {
              return <CartItem
                key={item.product.id}
                id={item.product.id}
                title={item.product.title}
                description={item.product.description}
                price={item.product.price}
                quantity={item.quantity}
                discount={item.product.discount}
              />
            }) :
            <h5 className='text-center text-primary'>Your shopping cart is empty!</h5>
        }
      </Container>
      {cartItems.length > 0 &&
        <Container className='col-lg-4'>
          <Table bordered className='text-center'>
            <thead >
              <tr >
                <th colSpan={4} className='text-center'>Cart Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Total:</td>
                <td colSpan={3}>{'+ $' + OrderTotal}</td>
              </tr>
              <tr>
                <td>Discount Applied:</td>
                <td colSpan={3} className='text-success'>-{' $' + Math.floor(orderDiscount)}</td>
              </tr>
              <tr>
                <td>Shipping Fee:</td>
                <td>{OrderTotal > 300 ? <p>Free</p> : <p className='text-danger'>{'+ $14'}</p>}</td>
              </tr>
              <tr>
                <td><h5 className='mt-2'>Total amount to pay:</h5></td>
                <td className='text-primary fs-3'><h1 className='display-6'>${Math.floor(totalAmount + (OrderTotal > 300 ? 0 : 14))}</h1></td>
              </tr>
            </tbody>
          </Table>
          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label={<i className="bi bi-paypal"> Paypal</i>}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label={<i className="bi bi-stripe"> Stripe</i>}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label={<i className="bi bi-cash-coin"> COD</i>}
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
            <div className='d-flex justify-content-center'>
              <Button onClick={placeOrderHandler} variant="success">Proceed to pay</Button>
            </div>
          </Form>
        </Container>
      }
    </Container>

  )
}

export default Cart
