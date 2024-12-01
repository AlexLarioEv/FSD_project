import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAsyncThunk } from '@/shared/config/storeConfig';
import { EOrderFilter, filterActions } from '@/entities/Filter';

import { fetchArticleList } from './fetchArticleList';
import { articleListAction } from '../slices/articleListSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    TAsyncThunk<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
    const { dispatch } = thunkApi;

    const orderFromUrl = searchParams.get('order') as EOrderFilter;
    const sortFromUrl = searchParams.get('sort');
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type');

    if (orderFromUrl) {
        dispatch(filterActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
        dispatch(filterActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
        dispatch(filterActions.setFilterQuery(searchFromUrl));
    }

    if (typeFromUrl) {
        dispatch(filterActions.setTagQuery(typeFromUrl));
    }

    dispatch(articleListAction.initState());
    dispatch(fetchArticleList());
});
