import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'ecb1b63a-f2fa-44e4-afd4-42157c98792f';

interface Breed {
    id: string,
    name: string,
    image: {
        url: string,
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query: (limit = 10) => `/breeds?limit${limit}`,
            }),
        }
    }
});

export const { useFetchBreedsQuery } = apiSlice;