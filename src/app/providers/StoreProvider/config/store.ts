import { configureStore, ReducersMapObject,  } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

import {counterReducer} from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import {api, rtkApi} from '@/shared/api'
import { scrollSaveReducer } from '@/features/ScrollSave';

import {createReducerManager} from'./createReducerManager'
import type {TStateSchema} from './types'

export const staticReducer: ReducersMapObject<TStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
}

export const createReduxStore = (
    initialState?:TStateSchema, 
    asyncReducers?: ReducersMapObject<TStateSchema>,
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
                }
            },
        }).concat(rtkApi.middleware),
        preloadedState: initialState,
    });
    

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store
}
