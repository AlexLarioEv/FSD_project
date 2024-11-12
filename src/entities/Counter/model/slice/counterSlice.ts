import { PayloadAction } from '@reduxjs/toolkit';
import {TCounterSchema} from '../types'
import { buildSlice } from '@/shared/lib/store'

const initialState: TCounterSchema = {value: 0}

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: state => {
            state.value += 1
        },
        add: (state, {payload}: PayloadAction<number>) => {
            state.value += payload;
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const {actions: counterActions, reducer: counterReducer, useActions: useCounterActions} = counterSlice;

