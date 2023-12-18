import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrdersMutation } from '../../features/usersApiSlice';
import { placedOrders } from '../../features/authSlice';

function Orders() {
  const authState = useSelector((state) => state.auth)
  const [getOrders] = useGetOrdersMutation()
  const dispatch = useDispatch()


  function getOrdersData() {
    try {
      const setData = async () => {
        const res = await getOrders({ orderedBy: authState.userInfo.email }).unwrap().catch(e => {
          console.log(e)
        })
        console.log(...res.data)
        dispatch(placedOrders([...res.data]))
      }
      setData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h1 className="display-6 text-center border-bottom">Orders</h1>
      <Button onClick={getOrdersData}>Refresh</Button>
      <Container>
        <p>{
          authState.userOrders.length > 0 ? authState.userOrders.map(order => {
            return <div className='border mb-2 p-1 d-flex flex-column'>
              <div className='border-bottom fs-6'><p>Order id - {order._id}</p></div>
              <div className='d-flex justify-content-between'>
                <div className='display-6 fs-4'><p>Product - {order.productTitle}</p></div>
                <div className='fs-5 text-success'><p>Price - ${order.productPrice}</p></div>
              </div>
            </div>
          }) : <p>You have no orders yet</p>
        }</p>
      </Container>
    </Container >
  )
}

export default Orders
