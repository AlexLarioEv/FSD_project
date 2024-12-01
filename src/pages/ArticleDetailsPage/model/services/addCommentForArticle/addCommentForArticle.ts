import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAsyncThunk } from '@/shared/config/storeConfig';
import { TComment } from '@/entities/Comment';
import { getUser } from '@/entities/User';
import { getArticleData } from '@/entities/Article';
import { fetchCommentById } from '../fetchCommentById';

export const addCommentForArticle = createAsyncThunk<
    TComment,
    string,
    TAsyncThunk<string>
>(
    'ArticleDetailsPage/addCommentForArticle',
    async (text, { extra, rejectWithValue, getState, dispatch }) => {
        const { auth } = getUser(getState());
        const article = getArticleData(getState());

        if (!auth || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<TComment>(`/comments`, {
                articleId: article.id,
                userId: auth.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentById(article.id));

            return response.data;
        } catch {
            return rejectWithValue('Error');
        }
    },
);
