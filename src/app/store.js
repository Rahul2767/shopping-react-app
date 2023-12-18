import { configureStore } from '@reduxjs/toolkit';
import FilterSortReducer from '../features/FilterSort/FilterSortSlice';
import authReducer from '../features/authSlice'
import { apiSlice } from '../features/apiSlice';

export const store = configureStore({
  reducer: {
    FilterSort: FilterSortReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
  devTools: true,
});
