import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ELocalStorageKey } from '@/shared/const';
import { setFeatureFlag } from '@/shared/lib/features';
import { TUser, TUserSchema } from '../types';
import { saveJsonServer } from '../services/saveJsonServer';
import { initAuthData } from '../services/initAuthData';

const initialState: TUserSchema = {
    _init: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<TUser>) => {
            state.auth = action.payload;
            setFeatureFlag(action.payload.features);

            localStorage.setItem(ELocalStorageKey.USER, action.payload.id);
        },
        logout: (state) => {
            state.auth = undefined;
            localStorage.removeItem(ELocalStorageKey.USER);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveJsonServer.fulfilled, (state, { payload }) => {
            if (state.auth) {
                state.auth.jsonSettings = payload;
            }
        });
        builder.addCase(initAuthData.fulfilled, (state, { payload }) => {
            state.auth = payload;
            setFeatureFlag(payload.features);
            state._init = true;
        });
        builder.addCase(initAuthData.rejected, (state) => {
            state._init = true;
        });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
