import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAsyncThunk } from '@/shared/config/storeConfig';

import { TUser } from '../types';
import { ELocalStorageKey } from '@/shared/const';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<TUser, void, TAsyncThunk<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(ELocalStorageKey.USER);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
