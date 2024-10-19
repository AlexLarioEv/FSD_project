import { createAsyncThunk } from "@reduxjs/toolkit";

import {TAsyncThunk} from '@/app/providers/StoreProvider'

import { TArticle } from '../types/ArticleSchema';

export const fetchArticleById = createAsyncThunk<TArticle, string, TAsyncThunk<string>>(
    'article/fetchArticleById',
    async (idArticle, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<TArticle>(`/articles/${idArticle}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Error');
        }
    },
)