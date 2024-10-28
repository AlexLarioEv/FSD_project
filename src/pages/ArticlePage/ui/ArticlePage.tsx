import { FC,memo } from "react";

import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector, useInitEffect } from "@/shared/hooks";
import { ETypeText, Text } from "@/shared/ui/Text";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleList, EArticleView } from "@/entities/Article"

import { getErrorArticleList, getViewArticleList, isLoadinArticleList } from "../model/selectors/articleList";
import { articleListReducer, articleListAction, getArticleList } from "../model/slices/articleListSlice";
import { fetchArticleList } from "../model/services/fetchArticleList";

import styles from './ArticlePage.module.scss';

type TArticlePageProps = {
  className?: string;
};

const reducers: TReducerList = {
    articleList: articleListReducer
}

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const {articles, error, loading, view } = useAppSelector( state => ({ 
        articles: getArticleList.selectAll(state),
        error: getErrorArticleList(state),
        loading: isLoadinArticleList(state),
        view: getViewArticleList(state)
    }))

    const handleSwichView = (value: EArticleView) => {
        dispatch(articleListAction.setView(value));
    }

    useInitEffect(()=>{
        dispatch(fetchArticleList());
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(styles.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view ?? EArticleView.SMALL} onViewClick={handleSwichView}/>
                {error ? 
                    <Text description={error} type={ETypeText.ERROR}/> : 
                    <ArticleList view={view ?? EArticleView.SMALL} articles={articles} isLoading={loading} />
                }
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
