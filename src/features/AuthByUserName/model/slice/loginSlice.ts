import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import {loginByUserName} from '../services';
import {TLoginSchema} from '../types'

const initialState: TLoginSchema = {};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(loginByUserName.pending, state => {
            state.isLoading = true;

        }).addCase(loginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;

        }).addCase(loginByUserName.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.username = action.payload.username
        })
    }
})

export const {actions: loginActions, reducer: loginReducer} = loginSlice;
