import { FC, memo } from "react";
import { createSelector } from "@reduxjs/toolkit";

import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleList, EArticleView } from "@/entities/Article";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { TStateSchema } from '@/shared/config/storeConfig';

import { 
    getViewArticleList, 
    isLoadingArticleList, } from "../../model/selectors/articleList";
import { articleListAction, getArticleList } from "../../model/slices/articleListSlice";

type TArticleListWithViewProps = {
    className?: string;
};

const selectArticleData = createSelector(
    [
        (state: TStateSchema) => getArticleList.selectAll(state),
        isLoadingArticleList,
        getViewArticleList
    ],
    (articles, loading, view) => ({
        articles,
        loading,
        view
    })
);

const ArticleListWithView: FC<TArticleListWithViewProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    const {articles, loading, view} = useAppSelector(selectArticleData);
    
    const handleSwitchView = (value: EArticleView) => {
        dispatch(articleListAction.setView(value));
    }
    

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={handleSwitchView}/>
            <ArticleList view={view} articles={articles} isLoading={loading} />
        </div>
    );
};

export default memo(ArticleListWithView);