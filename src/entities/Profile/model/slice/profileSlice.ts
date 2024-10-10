import { createSlice } from "@reduxjs/toolkit";
import {getProfile} from '../services'

import {TProfileSchema} from '../types/ProfileSchema';

const initialState: TProfileSchema = {isLoading: false, readonly: false}

export const profileSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getProfile.pending, state => {
            state.isLoading = true;

        }).addCase(getProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;

        }).addCase(getProfile.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data = action.payload
        })
    }
})

export const {actions: profileActions, reducer: profileReducer} = profileSlice;