import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ELocalStorageKey } from "../const";

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(ELocalStorageKey.USER) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
})
