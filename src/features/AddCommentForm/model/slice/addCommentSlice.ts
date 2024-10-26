import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import {TAddCommentFormSchema} from '../types/addCommentSchema'

const initialState: TAddCommentFormSchema = {};

export const addCommentSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export const {actions: addCommentActions, reducer: addCommentReducer} = addCommentSlice;
