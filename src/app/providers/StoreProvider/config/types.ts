import type { 
    AnyAction, 
    EnhancedStore, 
    Reducer, 
    ReducersMapObject} from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import type { TCounterSchema } from '@/entities/Counter';
import type {TUserSchema} from '@/entities/User'
import type {TLoginSchema} from '@/features/AuthByUserName'
import { TProfileSchema } from '@/entities/Profile';

export type TStateSchema = {
    counter: TCounterSchema
    user: TUserSchema

    // Асинхронный редюсеры
    login?:TLoginSchema
    profile?: TProfileSchema
};

export type TStateSchemaKey  = keyof TStateSchema;

export interface ReducerManager  {
    getReducerMap: () => ReducersMapObject<TStateSchema>
    reduce: (state: TStateSchema, action: AnyAction) =>  TStateSchema
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<TStateSchema> {
    reducerManager: ReducerManager
}


type TExtraThunk = {
    navigate: NavigateFunction
    api: AxiosInstance
}

export type TAsyncThunk<T> = {
    rejectWithValue: T
    extra: TExtraThunk
}
