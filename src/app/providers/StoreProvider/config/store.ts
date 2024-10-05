import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import {counterReducer} from '@/entities/Counter';
import { userReducer } from '@/entities/User';

import {createReducerManager} from'./createReducerManager'
import type {TStateSchema} from './types'


export const createReduxStore = (initialState?:TStateSchema, asyncReducers?: ReducersMapObject<TStateSchema>) => {

    const rootReducer: ReducersMapObject<TStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        ...asyncReducers
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<TStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })     
    
    // @ts-expect-error Пока оставим так
    store.reducerManager = reducerManager;

    return store
}
