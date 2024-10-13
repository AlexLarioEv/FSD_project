import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk } from '@/app/providers/StoreProvider';
import {getProfileData} from '../../selector'

import { TProfile  } from '../../types/ProfileSchema';

export const updateProfile = createAsyncThunk<TProfile, void, TAsyncThunk<string>>(
    'profile/updateProfileData',
    async (_, {extra, rejectWithValue, getState}) => {
        try {
            const {form} = getProfileData(getState()) || {}
            const response = await extra.api.put<TProfile>('/profile', form);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
)