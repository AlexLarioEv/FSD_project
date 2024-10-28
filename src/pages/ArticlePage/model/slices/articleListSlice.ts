import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { TStateSchema } from '@/app/providers/StoreProvider'

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
    name: 'comments',
    initialState: articleListAdapter.getInitialState<TArticleListSchema>({
        isLoading: false,
        error:undefined,
        ids: [],
        entities: {},
        view: localStorage.getItem(ELocalStorageKey.ARTICLE_PAGE_VIEW) as EArticleView.BIG ?? EArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>)=> {
            state.view = action.payload
            localStorage.setItem(ELocalStorageKey.ARTICLE_PAGE_VIEW, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleList.pending, (state)=> {
            state.isLoading = true;
            state.error = undefined;
        }).addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<TArticle[]>)=> {
            articleListAdapter.setAll(state, action.payload)
            state.isLoading = false;
        }).addCase(fetchArticleList.rejected, (state, action)=> {
            state.error = action.payload
            state.isLoading = false
        })
    }
})
  
  
export const { 
    actions: articleListAction, 
    reducer: articleListReducer } = articleListSlice;