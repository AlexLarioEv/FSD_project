import { createSlice } from '@reduxjs/toolkit'
import {TUserShema} from '../types'

const initialState: TUserShema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const {actions: userActions, reducer: userReducer} = userSlice;
