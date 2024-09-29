import { createSlice } from '@reduxjs/toolkit'
import {TCounterShema} from '../types'

const initialState: TCounterShema = {value: 0}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const {actions: counterActions, reducer: counterReducer} = counterSlice;
