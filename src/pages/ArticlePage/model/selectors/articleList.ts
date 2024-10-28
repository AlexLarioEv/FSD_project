import { TStateSchema } from "@/app/providers/StoreProvider";

export const isLoadinArticleList = (state: TStateSchema) => !!state.articleList?.isLoading;
export const getErrorArticleList = (state: TStateSchema) => state.articleList?.error;
export const getViewArticleList = (state: TStateSchema) => state.articleList?.view;