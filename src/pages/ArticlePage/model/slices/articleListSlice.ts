import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { TStateSchema } from '@/shared/config/storeConfig';

import { fetchArticleList } from '../services/fetchArticleList'
import { TArticleListSchema } from '../types/articleListSchema';
import { EArticleView, TArticle } from '@/entities/Article';
import { ELocalStorageKey } from '@/shared/const';
  
const articleListAdapter = createEntityAdapter({
    selectId: (article: TArticle) => article.id,
})

export const getArticleList = articleListAdapter.getSelectors<TStateSchema>((state) => 
    state.articleList || articleListAdapter.getInitialState())
  
const articleListSlice = createSlice({
    name: 'articleList',
    initialState: articleListAdapter.getInitialState<TArticleListSchema>({
        isLoading: false,
        error:undefined,
        ids: [],
        entities: {},
        view: localStorage.getItem(ELocalStorageKey.ARTICLE_PAGE_VIEW) as EArticleView ?? EArticleView.SMALL,
        limit: 9,
        page: 1,
        hasMore: true,
        _init: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>)=> {
            state.view = action.payload
            localStorage.setItem(ELocalStorageKey.ARTICLE_PAGE_VIEW, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload 
        },
        initState: (state) => {
            state.limit = state.view === EArticleView.BIG ? 4 : 9;
            state.view = localStorage.getItem(ELocalStorageKey.ARTICLE_PAGE_VIEW) as EArticleView;
            state._init = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleList.pending, (state, action)=> {
            state.isLoading = true;
            state.error = undefined;

            if(action.meta.arg?.replace){
                articleListAdapter.removeAll(state);
            }
        }).addCase(fetchArticleList.fulfilled, (state, action)=> {
            articleListAdapter.setMany(state, action.payload);
            state.hasMore = action.payload.length >= state.limit;
            state.isLoading = false;

            if (action.meta.arg?.replace) {
                articleListAdapter.setAll(state, action.payload);
            } else {
                articleListAdapter.addMany(state, action.payload);
            }
            
        }).addCase(fetchArticleList.rejected, (state, action)=> {
            state.error = action.payload;
            state.isLoading = false
        })
    }
})
  
  
export const { 
    actions: articleListAction, 
    reducer: articleListReducer } = articleListSlice;