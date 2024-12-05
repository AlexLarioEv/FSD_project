import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ELocalStorageKey } from '@/shared/const';
import { setFeatureFlag } from '@/shared/lib/features';
import { TUser, TUserSchema } from '../types';

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
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(ELocalStorageKey.USER);
            if (user) {
                const jsonUser = JSON.parse(user) as TUser;
                state.auth = jsonUser;
                setFeatureFlag(jsonUser.features);
            }
            state._init = true;
        },
        logout: (state) => {
            state.auth = undefined;
            localStorage.removeItem(ELocalStorageKey.USER);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
