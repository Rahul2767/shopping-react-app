import React from 'react'
import { Container } from 'react-bootstrap'

function Loader() {
    return (
        <Container className='text-center  d-flex justify-content-center align-items-center mt-5'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </Container>
    )
}

export default Loader
