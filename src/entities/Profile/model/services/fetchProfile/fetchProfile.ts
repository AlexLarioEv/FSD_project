import { createAsyncThunk } from "@reduxjs/toolkit";

import {TAsyncThunk} from '@/app/providers/StoreProvider'

import { TProfile, TErrorList, EErrorValidateForm } from '../../types/ProfileSchema';

export const fetchProfile = createAsyncThunk<TProfile, void, TAsyncThunk<TErrorList>>(
    'profile/getProfile',
    async (_, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<TProfile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue([EErrorValidateForm.SERVER_ERROR]);
        }
    },
)