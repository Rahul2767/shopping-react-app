import { apiSlice } from './apiSlice'
const USERS_URL = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/order`,
                method: 'POST',
                body: data
            })
        }),
        getOrders : builder.mutation({
            query : (data) => ({
                url: `${USERS_URL}/getOrders`,
                method: 'POST',
                body : data
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useSignupMutation, useCreateOrderMutation, useGetOrdersMutation} = usersApiSlice