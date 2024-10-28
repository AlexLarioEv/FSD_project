import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk } from "@/app/providers/StoreProvider";
import { TArticle } from "@/entities/Article";
import { getLimitArticleList } from "../selectors/articleList";

type TFetchArticleListParams = {
    page: number
}

export const fetchArticleList = createAsyncThunk<
    TArticle[],
    TFetchArticleListParams,
    TAsyncThunk<string>
    >(
        'articlesPage/fetchArticlesList',
        async (params, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const {page = 1} = params;
            const limit = getLimitArticleList(getState())

            try {
                const response = await extra.api.get<TArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page
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
