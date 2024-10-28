import { TStateSchema } from "@/app/providers/StoreProvider";
import { EArticleView } from "@/entities/Article";

export const isLoadinArticleList = (state: TStateSchema) => !!state.articleList?.isLoading;
export const getErrorArticleList = (state: TStateSchema) => state.articleList?.error;
export const getViewArticleList = (state: TStateSchema) => state.articleList?.view || EArticleView.SMALL;
export const getPageArticleList = (state: TStateSchema) => state.articleList?.page || 1;
export const getLimitArticleList = (state: TStateSchema) => state.articleList?.limit || 9;
export const getHasMoreArticleList = (state: TStateSchema) => state.articleList?.hasMore;
export const getInitArticleList = (state: TStateSchema) => state.articleList?._init