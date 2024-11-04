import type { EnhancedStore, Reducer, ThunkDispatch, Action} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import type { TArticleDetailsCommentsShema } from '@/pages/ArticleDetailsPage';
import type { TArticleListSchema } from '@/pages/ArticlePage';
import type { TAddCommentFormSchema } from '@/features/AddCommentForm'
import type { TLoginSchema } from '@/features/AuthByUserName';
import type { TCounterSchema } from '@/entities/Counter';
import type { TUserSchema } from '@/entities/User';
import type { TArticleSchema } from '@/entities/Article';
import type { TProfileSchema } from '@/entities/Profile';
import type { TScrollSaveSchema } from '@/features/ScrollSave'
import type { TFilterSchema } from '@/entities/Filter';


import {staticReducer} from './store'
import {createReducerManager} from './createReducerManager'
import { rtkApi } from '@/shared/api';

export type StaticReducers = typeof staticReducer

export type TStateSchema = {
    counter: TCounterSchema;
    user: TUserSchema;
    scrollSave: TScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Асинхронный редюсеры
    login?: TLoginSchema;
    profile?: TProfileSchema;
    article?: TArticleSchema;
    articleDetailsComment?: TArticleDetailsCommentsShema;
    addCommentForm?: TAddCommentFormSchema;
    articleList?: TArticleListSchema;
    filter?: TFilterSchema;
};

export type TStateSchemaKey  = keyof TStateSchema;

export type Reducers = Record<TStateSchemaKey, Reducer>

export type ReducerManager = ReturnType<typeof createReducerManager>
export interface ReduxStoreWithManager extends EnhancedStore<TStateSchema> {
    reducerManager: ReducerManager
}

export type TExtraThunk = {
    api: AxiosInstance
}

export type TAsyncThunk<T> = {
    rejectValue: T;
    extra: TExtraThunk;
    state: TStateSchema;
}

export type AppDispatch = ThunkDispatch<TStateSchema, undefined, Action>
