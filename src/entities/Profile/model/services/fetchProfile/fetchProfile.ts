import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk} from '@/shared/config/storeConfig';

import { TProfile, TErrorList, EErrorValidateForm } from '../../types/ProfileSchema';

export const fetchProfile = createAsyncThunk<TProfile, string, TAsyncThunk<TErrorList>>(
    'profile/getProfile',
    async (idProfile, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<TProfile>(`/profile/${idProfile}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue([EErrorValidateForm.SERVER_ERROR]);
        }
    },
)