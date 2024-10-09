import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import {counterReducer} from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import {api} from '@/shared/api'

import {createReducerManager} from'./createReducerManager'
import type {TStateSchema} from './types'

export const createReduxStore = (
    initialState?:TStateSchema, 
    asyncReducers?: ReducersMapObject<TStateSchema>, 
    navigate?: NavigateFunction
) => {

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
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api,
                    navigate
                }
            }
        })
    })     
    
    // @ts-expect-error Пока оставим так
    store.reducerManager = reducerManager;

    return store
}
