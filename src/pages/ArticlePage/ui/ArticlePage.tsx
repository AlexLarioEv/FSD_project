import { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";

import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector, useInitEffect, useDebounce } from "@/shared/hooks";
import { ETypeText, Text } from "@/shared/ui/Text";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";;
import { ArticleList, EArticleType, EArticleView, TArticleKey } from "@/entities/Article";
import {
    filterReducer,
    FilterByQuery, 
    SortedBySelect, 
    FindByTab,
} from '@/features/Filter';
import {TOptionsType} from '@/shared/ui/Select'

import { 
    getErrorArticleList, 
    getViewArticleList, 
    isLoadingArticleList, 
    getPageArticleList, 
    getHasMoreArticleList, 
    getInitArticleList} from "../model/selectors/articleList";
import { articleListReducer, articleListAction, getArticleList } from "../model/slices/articleListSlice";
import { fetchArticleList } from "../model/services/fetchArticleList";
import { tabsArray } from '../model/constants/constants';

import styles from './ArticlePage.module.scss';
import { Page } from "@/widgets/Page";
import { useSearchParams } from "react-router-dom";
import { initArticlesPage } from "../model/services/initArticalPage";
import { TStateSchema } from "@/app/providers/StoreProvider";

type TArticlePageProps = {
  className?: string;
};

const reducers: TReducerList = {
    articleList: articleListReducer,
    filter: filterReducer,
}

const selectArticleData = createSelector(
    [
        (state: TStateSchema) => getArticleList.selectAll(state),
        getErrorArticleList,
        isLoadingArticleList,
        getViewArticleList,
        getPageArticleList,
        getHasMoreArticleList,
        getInitArticleList
    ],
    (articles, error, loading, view, page, hasMore, inited) => ({
        articles,
        error,
        loading,
        view,
        page,
        hasMore,
        inited
    })
);

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation('articles');
    const [searchParams] = useSearchParams();
    const {articles, error, loading, view, page, hasMore, inited } = useAppSelector(selectArticleData);

    const selectSortParams: TOptionsType<TArticleKey>[] =useMemo(()=>[
        {
            value: 'views',
            content: t('views'),
        },
        {
            value: 'createdAt',
            content: t('date'),
        },
        {
            value: 'title',
            content: t('title')
        }
    ],[t]);


    const fetchArticleByFilter = useCallback(() => {
        dispatch(articleListAction.setPage(1));
        dispatch(fetchArticleList({replace: true}));
    },[dispatch])

    const fetchArticleByFilterDebounced = useDebounce(fetchArticleByFilter, 500);

    
    const handleSwitchView = (value: EArticleView) => {
        dispatch(articleListAction.setView(value));
    }

    
    const onLoadNextPart = useCallback(()=> {
        if(hasMore && !loading){
            dispatch(articleListAction.setPage(page + 1));
            dispatch(fetchArticleList());
        }
    },[page, hasMore, loading, dispatch])

    const handleChangeOrder = useCallback(() => {
        fetchArticleByFilter()
    },[fetchArticleByFilter])

    const handleChangeField = useCallback(() => {
        fetchArticleByFilter()
    },[fetchArticleByFilter])
    

    const handleClickTab = useCallback(() => {
        fetchArticleByFilter()
    },[fetchArticleByFilter])
    
    const handleChangeQuerySearch = useCallback(()=> {
        fetchArticleByFilterDebounced()
    },[fetchArticleByFilterDebounced])
    

    useInitEffect(()=>{
        if(!inited){
            dispatch(articleListAction.initState());
            dispatch(initArticlesPage(searchParams));
        }
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlePage, {}, [className])}>
                <Text title={t('sort')}/> 
                <SortedBySelect 
                    className={styles.sortItem}
                    label={t('by')} 
                    labelOrder={t('by')} 
                    fieldOptions={selectSortParams} 
                    onChangeOrder={handleChangeOrder} 
                    onChangeField={handleChangeField}
                />
                <FilterByQuery placeholder={t('find')} onChange={handleChangeQuerySearch}/>
                <FindByTab 
                    defaultValue={EArticleType.ALL}
                    className={styles.filterItem} 
                    tabs={tabsArray.map((select)=> t(select))} 
                    onClick={handleClickTab}/>
                <ArticleViewSelector view={view} onViewClick={handleSwitchView}/>
                {error ? 
                    <Text description={error} type={ETypeText.ERROR}/> : 
                    <ArticleList view={view} articles={articles} isLoading={loading} />
                }
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlePage;
