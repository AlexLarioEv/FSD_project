import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {counterReducer} from '@/entities/Counter';

import type {TStateSchema} from './types'
import { userReducer } from '@/entities/User';
import {loginReducer} from '@/features/AuthByUserName'

const reducer: ReducersMapObject<TStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
}

export const createReduxStore = (initialState?:TStateSchema) => {
    return configureStore<TStateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })      
}
