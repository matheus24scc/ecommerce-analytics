import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Products', 'Sales', 'Dashboard'],
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => '/dashboard/stats',
      providesTags: ['Dashboard'],
    }),
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getSalesData: builder.query({
      query: () => '/sales',
      providesTags: ['Sales'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetDashboardStatsQuery,
  useGetProductsQuery,
  useGetSalesDataQuery,
} = apiSlice;
