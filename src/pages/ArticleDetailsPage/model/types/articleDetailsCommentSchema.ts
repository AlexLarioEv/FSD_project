import { EntityState } from "@reduxjs/toolkit";
import { TComment } from "@/entities/Comment";

export type TArticleDetailsCommentsShema ={
    isLoading?: boolean;
    error?: string;
} & EntityState<TComment, string>