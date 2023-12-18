import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container } from 'react-bootstrap';
import "./products.css"

function TrendingItemsCard(props) {
    return (
        <Card className='product-card m-3 trending-items'>
            <Card.Img variant="top" src={props.thumbnail} style={{ height: 170 }} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Container fluid className='p-0'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className='fs-6'>
                        {props.description}
                    </Card.Text>
                </Container>
                <Container fluid className='p-0'>
                    <Container fluid className='d-flex flex-column justify-content-between align-items-center p-0 py-2'>
                        <Container fluid className='p-0 mt-1 d-flex justify-content-between align-items-center p-0 py-2'>
                            <Container fluid className='p-0'>
                                <del><h6 className=" m-0"><span>&#36;</span>{props.price}</h6></del>
                                <Badge bg="success">{Math.ceil(props.discount)} % Off</Badge>
                                <h3 className=" m-0"><span>&#36;</span>{Math.ceil(props.price - props.price * props.discount / 100)}</h3>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default TrendingItemsCard
