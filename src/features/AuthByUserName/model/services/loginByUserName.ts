import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAsyncThunk } from '@/shared/config/storeConfig';
import { TUser, userActions } from '@/entities/User';

import { TLoginByUsernameProps } from '../types';

export const loginByUserName = createAsyncThunk<
    TUser,
    TLoginByUsernameProps,
    TAsyncThunk<string>
>(
    'login/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<TUser>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
