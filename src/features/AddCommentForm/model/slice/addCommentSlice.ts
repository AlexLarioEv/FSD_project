import { createSlice,PayloadAction } from '@reduxjs/toolkit'

// import {sendComment} from '../service/sendComment/sendComment';
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
    // extraReducers:(builder) => {
    //     builder.addCase(sendComment.pending, state => {
    //         state.isLoading = true;

    //     }).addCase(sendComment.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error.message;

    //     }).addCase(sendComment.fulfilled, (state, action)=> {
    //         state.isLoading = false;
    //         state.username = action.payload.username
    //     })
    // }
})

export const {actions: addCommentActions, reducer: addCommentReducer} = addCommentSlice;
