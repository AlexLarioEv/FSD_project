import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile, updateProfile } from '../services';

import { TProfileSchema, TProfile } from '../types/ProfileSchema';

const initialState: TProfileSchema = { isLoading: false, readonly: true };

export const profileSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Partial<TProfile>>) => {
            state.form = { ...state.form, ...action.payload };
        },
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.error = undefined;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } =
    profileSlice;
