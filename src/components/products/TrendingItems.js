import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import TrendingItemsCard from './TrendingItemsCard';


function TrendingItems() {
    const product = useSelector(state => state.FilterSort.products)

    return (
        <Container fluid className='border'>
            <p className='display-6 text-center'>Trending Products</p>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
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
                    </div>
                    <div class="carousel-item">
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
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </Container>
    )
}

export default TrendingItems
