import { TStateSchema } from '@/shared/config/storeConfig/types';

export const getArticle = (state: TStateSchema) => state.article;
export const getArticleError = (state: TStateSchema) => state.article?.error;
export const isArticleLoading = (state: TStateSchema) =>
    state.article?.isLoading;
export const getArticleData = (state: TStateSchema) => state.article?.data;
