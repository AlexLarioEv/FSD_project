import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk } from '@/shared/config/storeConfig';
import { EArticleType, TArticle } from "@/entities/Article";
import { getLimitArticleList, getPageArticleList } from "../selectors/articleList";
import { getFilterQuery, getOrder, getSort, getTagQuery } from "@/entities/Filter";
import { addQueryParams } from "@/shared/lib/url";

export type TFetchArticleListParams = {
    replace?: boolean
} | undefined

export const fetchArticleList = createAsyncThunk<
    TArticle[],
    TFetchArticleListParams,
    TAsyncThunk<string>
    >(
        'articlesPage/fetchArticlesList',
        async (params, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getLimitArticleList(getState());
            const page = getPageArticleList(getState());

            const sort = getSort(getState());
            const order = getOrder(getState());
            const search = getFilterQuery(getState());
            const type  = getTagQuery(getState());
            

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<TArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === EArticleType.ALL ? undefined : type,
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
