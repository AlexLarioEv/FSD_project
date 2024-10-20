import { createSlice } from '@reduxjs/toolkit'
import {fetchArticleById} from '../services/fetchArticleById'

import {TArticleSchema} from '../types/ArticleSchema'

const initialState: TArticleSchema = {isLoading: false}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state)=> {
            state.isLoading = true;
            state.error = undefined;
        }).addCase(fetchArticleById.fulfilled, (state, action)=> {
            state.data = action.payload;
            state.isLoading = false;
        }).addCase(fetchArticleById.rejected, (state, action)=> {
            state.error = action.payload
            state.isLoading = false
        })
    }
})

export const {actions: articleActions, reducer: articleReducer} = articleSlice;
