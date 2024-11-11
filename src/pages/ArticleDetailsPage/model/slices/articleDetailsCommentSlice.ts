import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {TComment} from '@/entities/Comment';
import { TStateSchema } from '@/shared/config/storeConfig';

import {fetchCommentById} from '../services/fetchCommentById'
import { TArticleDetailsCommentsShema } from '../types/articleDetailsCommentSchema';
  
const commentsAdapter = createEntityAdapter({

    selectId: (comment: TComment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<TStateSchema>((state) => 
    state.articleDetailsComment || commentsAdapter.getInitialState())
  
const articleDetailsCommentSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<TArticleDetailsCommentsShema>({
        isLoading: false,
        error:undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentById.pending, (state)=> {
            state.isLoading = true;
            state.error = undefined;
        }).addCase(fetchCommentById.fulfilled, (state, action: PayloadAction<TComment[]>)=> {
            commentsAdapter.setAll(state, action.payload)
            state.isLoading = false;
        }).addCase(fetchCommentById.rejected, (state, action)=> {
            state.error = action.payload
            state.isLoading = false
        })
    }
})
  
  
export const { 
    actions: articleDetailsCommentAction, 
    reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;