import { configureStore, ReducersMapObject,  } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { Reducer } from 'redux';

import {counterReducer} from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import {api} from '@/shared/api'

import {createReducerManager} from'./createReducerManager'
import type {TStateSchema} from './types'

export const staticReducer: ReducersMapObject<TStateSchema> = {
    counter: counterReducer,
    user: userReducer,
}

export const createReduxStore = (
    initialState?:TStateSchema, 
    asyncReducers?: ReducersMapObject<TStateSchema>,
    navigate?: NavigateFunction
) => {
    const reducers = {...staticReducer , ...asyncReducers};

    const reducerManager = createReducerManager(reducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<TStateSchema>,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api,
                    navigate
                }
            },
        }),
        preloadedState: initialState,
    });
    

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store
}
