import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {TScrollSaveSchema} from '../types/ScrollSaveSchema'

const initialState: TScrollSaveSchema = {
    scroll: {}
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string; position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position; 
        }   
    }
})

export const {actions: scrollSaveActions, reducer: scrollSaveReducer} = scrollSaveSlice;