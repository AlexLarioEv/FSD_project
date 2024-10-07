import { createSlice } from "@reduxjs/toolkit";

import {TProfileSchema} from '../types/ProfileSchema';

const initialState: TProfileSchema = {isLoading: false, readonly: false}

export const profileSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {}
})

export const {actions: profileActions, reducer: profileReducer} = profileSlice;