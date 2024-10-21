import type { EnhancedStore, Reducer, ThunkDispatch, Action} from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import type { TArticleDetailsComments } from '@/pages/ArticleDetailsPage';
import type { TAddCommentFormSchema } from '@/features/AddCommentForm'
import type { TLoginSchema } from '@/features/AuthByUserName';
import type { TCounterSchema } from '@/entities/Counter';
import type { TUserSchema } from '@/entities/User';
import type { TArticleSchema } from '@/entities/Article';
import type { TProfileSchema } from '@/entities/Profile';

import {staticReducer} from './store'
import {createReducerManager} from './createReducerManager'

export type StaticReducers = typeof staticReducer

export type TStateSchema = {
    counter: TCounterSchema;
    user: TUserSchema;

    // Асинхронный редюсеры
    login?: TLoginSchema;
    profile?: TProfileSchema;
    article?: TArticleSchema;
    articleDetailsComment?: TArticleDetailsComments;
    addCommentForm?: TAddCommentFormSchema;
};

export type TStateSchemaKey  = keyof TStateSchema;

export type Reducers = Record<TStateSchemaKey, Reducer>

export type ReducerManager = ReturnType<typeof createReducerManager>
export interface ReduxStoreWithManager extends EnhancedStore<TStateSchema> {
    reducerManager: ReducerManager
}

export type TExtraThunk = {
    navigate?: NavigateFunction
    api: AxiosInstance
}

export type TAsyncThunk<T> = {
    rejectValue: T;
    extra: TExtraThunk;
    state: TStateSchema;
}

export type AppDispatch = ThunkDispatch<TStateSchema, undefined, Action>
