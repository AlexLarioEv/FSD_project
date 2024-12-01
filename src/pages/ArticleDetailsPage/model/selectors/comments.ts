import { TStateSchema } from '@/shared/config/storeConfig';

export const isLoadingArticleDetailsComment = (state: TStateSchema) =>
    !!state.articleDetailsComment?.isLoading;
export const getErrorgArticleDetailsComment = (state: TStateSchema) =>
    state.articleDetailsComment?.error;
