import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import TrendingItemsCard from './TrendingItemsCard';


function TrendingItems() {
    const product = useSelector(state => state.FilterSort.products)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className='border'>
            <p className='display-6 text-center'>Trending Products</p>
            <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                <Carousel.Item>
                    <Container className='d-flex justify-content-between align-items-center'>
                        {
                            product.slice(8, 11).map(item => {
                                return <TrendingItemsCard
                                    key={item.id}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    discount={item.discountPercentage}
                                />
                            })
                        }
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className='d-flex justify-content-between align-items-center'>
                        {
                            product.slice(22, 25).map(item => {
                                return <TrendingItemsCard
                                    key={item.id}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    discount={item.discountPercentage}
                                />
                            })
                        }
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default TrendingItems
