import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAsyncThunk } from '@/shared/config/storeConfig';

import { TJsonSettings } from '../types/jsonSettings';
import { getAuthData } from '../selector/getUser';
import { getJsonSettings } from '../selector/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonServer = createAsyncThunk<
    TJsonSettings,
    TJsonSettings,
    TAsyncThunk<string>
>('user/fetchArticleById', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
