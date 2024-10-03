import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {counterReducer} from '@/entities/Counter';

import type {TStateShema} from './types'
import { userReducer } from '@/entities/User';

const reducer: ReducersMapObject<TStateShema> = {
    counter: counterReducer,
    user: userReducer
}

export const createReduxStore = (initialState:TStateShema) => {
    return configureStore<TStateShema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })      
}
