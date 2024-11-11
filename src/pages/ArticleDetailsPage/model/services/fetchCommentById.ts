import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk} from '@/shared/config/storeConfig';
import { TComment } from "@/entities/Comment";



export const fetchCommentById = createAsyncThunk<TComment[], string, TAsyncThunk<string>>(
    'article/fetchCommentById',
    async (articleId, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<TComment[]>(`/comments`,{
                params:{
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Error');
        }
    },
)