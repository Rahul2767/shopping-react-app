import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TrendingItemsCard from './TrendingItemsCard'


function TrendingItems() {
    const product = useSelector(state => state.FilterSort.products)

    return (
        <></>
    )
}

export default TrendingItems
