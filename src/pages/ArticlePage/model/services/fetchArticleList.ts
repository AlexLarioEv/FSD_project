import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk } from "@/app/providers/StoreProvider";
import { TArticle } from "@/entities/Article";

export const fetchArticleList = createAsyncThunk<
    TArticle[],
    void,
    TAsyncThunk<string>
    >(
        'articlesPage/fetchArticlesList',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<TArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch {
                return rejectWithValue('error');
            }
        },
    );
