import { TStateSchema } from '@/shared/config/storeConfig';
import { EArticleView } from '@/entities/Article';
import { buildSelector } from '@/shared/lib/store';

export const isLoadingArticleList = (state: TStateSchema) =>
    !!state.articleList?.isLoading;
export const getErrorArticleList = (state: TStateSchema) =>
    state.articleList?.error;
export const getViewArticleList = (state: TStateSchema) =>
    state.articleList?.view || EArticleView.SMALL;
export const getPageArticleList = (state: TStateSchema) =>
    state.articleList?.page || 1;
export const getLimitArticleList = (state: TStateSchema) =>
    state.articleList?.limit || 9;
export const getHasMoreArticleList = (state: TStateSchema) =>
    state.articleList?.hasMore;
export const getInitArticleList = (state: TStateSchema) =>
    state.articleList?._init;
export const isFetching = (state: TStateSchema) =>
    state.articleList?.fetchingReplace;

export const [useArticleById] = buildSelector(
    (state, id: string) => state.articleList?.entities[id],
);
