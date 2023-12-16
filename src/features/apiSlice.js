import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'https://shopping-react-app-api.vercel.app',
    credentials:"include"
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User'],
    endpoints : (builder) => ({})
})
