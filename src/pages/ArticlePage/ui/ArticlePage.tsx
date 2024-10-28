import { FC,memo, useCallback } from "react";

import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector, useInitEffect } from "@/shared/hooks";
import { ETypeText, Text } from "@/shared/ui/Text";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";;
import { ArticleList, EArticleView } from "@/entities/Article";

import { 
    getErrorArticleList, 
    getViewArticleList, 
    isLoadinArticleList, 
    getPageArticleList, 
    getHasMoreArticleList } from "../model/selectors/articleList";
import { articleListReducer, articleListAction, getArticleList } from "../model/slices/articleListSlice";
import { fetchArticleList } from "../model/services/fetchArticleList";

import styles from './ArticlePage.module.scss';
import { Page } from "@/shared/ui/Page";

type TArticlePageProps = {
  className?: string;
};

const reducers: TReducerList = {
    articleList: articleListReducer
}

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const {articles, error, loading, view, page, hasMore } = useAppSelector( state => ({ 
        articles: getArticleList.selectAll(state),
        error: getErrorArticleList(state),
        loading: isLoadinArticleList(state),
        view: getViewArticleList(state),
        page: getPageArticleList(state),
        hasMore: getHasMoreArticleList(state),
    }))

    const handleSwichView = (value: EArticleView) => {
        dispatch(articleListAction.setView(value));
    }

    const onLoadNextPart = useCallback(()=> {
        if(hasMore && !loading){
            dispatch(articleListAction.setPage(page + 1))
            dispatch(fetchArticleList({page: page + 1}));
        }
    },[page, hasMore, loading, dispatch])

    useInitEffect(()=>{
        dispatch(articleListAction.initState())
        dispatch(fetchArticleList({page: 1}));
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={handleSwichView}/>
                {error ? 
                    <Text description={error} type={ETypeText.ERROR}/> : 
                    <ArticleList view={view} articles={articles} isLoading={loading} />
                }
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
