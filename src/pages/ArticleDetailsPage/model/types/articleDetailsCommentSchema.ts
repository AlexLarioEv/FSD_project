import { TComment } from "@/entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export type TArticleDetailsComments ={
    isLoading?: boolean;
    error?: string;
} & EntityState<TComment, string>