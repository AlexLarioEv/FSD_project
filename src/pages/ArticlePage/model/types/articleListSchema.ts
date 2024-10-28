import { EntityState } from "@reduxjs/toolkit";

import { EArticleView, TArticle } from "@/entities/Article";

export type TArticleListSchema ={
    isLoading: boolean;
    error?: string;
    view: EArticleView;

    page: number;
    limit?: number;
    hasMore: boolean;
} & EntityState<TArticle, string>