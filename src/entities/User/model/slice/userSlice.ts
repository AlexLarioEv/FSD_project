import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {ELocalStorageKey} from '@/shared/const'
import {TUser, TUserSchema} from '../types'

const initialState: TUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<TUser>) => {
            state.auth = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(ELocalStorageKey.USER);
            if (user) {
                state.auth = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.auth = undefined;
            localStorage.removeItem(ELocalStorageKey.USER);
        },
    }
})

export const {actions: userActions, reducer: userReducer} = userSlice;
