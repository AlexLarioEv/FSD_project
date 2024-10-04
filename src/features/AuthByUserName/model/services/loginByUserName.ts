import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

import { TUser, userActions } from "@/entities/User";
import {ELocalStorageKey}from '@/shared/const'

type TLoginByUsernameProps = {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<TUser, TLoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<TUser>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(ELocalStorageKey.USER, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
)