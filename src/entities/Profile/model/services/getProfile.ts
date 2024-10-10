import { createAsyncThunk } from "@reduxjs/toolkit";

import {TAsyncThunk} from '@/app/providers/StoreProvider'

import { TProfile  } from '../types/ProfileSchema';

export const getProfile = createAsyncThunk<TProfile, void, TAsyncThunk<string>>(
    'profile/getProfile',
    async (_, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<TProfile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
)