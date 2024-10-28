import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {TScrollSaveShema} from '../types/ScrollSaveShema'

const initialState: TScrollSaveShema = {
    scroll: {}
};

export const scrollSaveSlece = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string; position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position; 
        }   
    }
})

export const {actions: scrollSaveActions, reducer: scrollSaveReducer} = scrollSaveSlece;