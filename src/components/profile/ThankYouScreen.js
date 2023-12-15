import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ThankYouScreen() {
  return (
    <Container className='d-flex justify-content-center flex-column align-items-center'>
      <div className='display-5 text-success'>Thank You, Order has been placed Successfully!</div>
      <i>go to <Link to={'/orders'}>my orders</Link></i>
    </Container>
  )
}

export default ThankYouScreen
