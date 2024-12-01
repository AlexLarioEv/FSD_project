import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EOrderFilter, TFilterSchema } from '../types/filterSchema';

const initialState: TFilterSchema = {};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<EOrderFilter>) => {
            state._order = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setFilterQuery: (state, action: PayloadAction<string>) => {
            state.filterQuery = action.payload;
        },
        setTagQuery: (state, action: PayloadAction<string>) => {
            state.tagQuery = action.payload;
        },
    },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
