import { TStateSchema } from "@/app/providers/StoreProvider";

export const isLoadingArticleDetailsComment = (state: TStateSchema) => !!state.articleDetailsComment?.isLoading;
export const getErrorgArticleDetailsComment = (state: TStateSchema) => state.articleDetailsComment?.error;