import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    filter: false,
    cartItems: [],
}

export const FilterSortSlice = createSlice({
    name: "SortProducts",
    initialState,
    reducers: {
        sortByPrice: (state) => {
            state = state.products.sort((a, b) => {
                return b.price - a.price
            })
        },
        sortByDiscount: (state) => {
            state = state.products.sort((a, b) => {
                return b.discountPercentage - a.discountPercentage
            })
        },
        sortByAvailability: (state) => {
            state = state.products.sort((a, b) => {
                return b.stock - a.stock
            })
        },
        sortByRating: (state) => {
            state = state.products.sort((a, b) => {
                return b.rating - a.rating
            })
        },
        filterByCategory: (state, action) => {
            if (action.payload === 'all') {
                state.filter = false
            }
            else {
                state.filter = true
                state.filteredProducts = state.products.filter((item) => {
                    return item.category === action.payload
                })
            }
        },
        fetchProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const index = state.cartItems.findIndex(value => {
                return value.product.id === action.payload.id
            })
            if (index === -1) {
                state.cartItems.push({ product: action.payload, quantity: 1 })
            }
            else {
                state.cartItems[index].quantity = state.cartItems[index].quantity + 1
            }
        },
        removeFromCart: (state, action) => {
            const index = state.cartItems.findIndex(value => {
                return value.product.id === action.payload
            })
            state.cartItems.splice(index, 1)
        },
        emptyCart: (state) => {
            state.cartItems = []
        }
    },
})

export const {emptyCart, removeFromCart, updateCartItemQuantity, addToCart, sortByAvailability, sortByPrice, sortByDiscount, sortByRating, filterByCategory, fetchProducts } = FilterSortSlice.actions
export default FilterSortSlice.reducer

