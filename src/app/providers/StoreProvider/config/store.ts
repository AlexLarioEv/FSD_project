import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from '../../../../entities/Counter';

import type {TStateShema} from './types'

export const createReduxStore = (initialState:TStateShema) => {
    return configureStore<TStateShema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
      })      
}
