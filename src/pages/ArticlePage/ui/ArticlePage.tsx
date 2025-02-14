import { FC, useCallback } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';

import { TStateSchema } from '@/shared/config/storeConfig';
import { Page } from '@/widgets/Page';
import { filterReducer } from '@/entities/Filter';
import {
    useAppDispatch,
    useAppSelector,
    useInitEffect,
} from '@/shared/lib/hooks';
import { ETypeText, Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib';
import { DynamicModuleLoader, TReducerList } from '@/shared/lib/components';

import {
    getErrorArticleList,
    getViewArticleList,
    isLoadingArticleList,
    getPageArticleList,
    getHasMoreArticleList,
    getInitArticleList,
} from '../model/selectors/articleList';
import {
    articleListReducer,
    articleListAction,
    getArticleList,
} from '../model/slices/articleListSlice';
import { fetchArticleList } from '../model/services/fetchArticleList';

import { initArticlesPage } from '../model/services/initArticalPage';
import { FilterArticleList } from './FilterArticleList/FilterArticleList';
import ArticleListWithView from './AricleListWithView/AricleListWithView';

import styles from './ArticlePage.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

type TArticlePageProps = {
    className?: string;
};

const reducers: TReducerList = {
    articleList: articleListReducer,
    filter: filterReducer,
};

const selectArticleProcess = createSelector(
    [
        (state: TStateSchema) => getArticleList.selectAll(state),
        getErrorArticleList,
        isLoadingArticleList,
        getViewArticleList,
        getPageArticleList,
        getHasMoreArticleList,
        getInitArticleList,
    ],
    (articles, error, loading, view, page, hasMore, inited) => ({
        articles,
        error,
        loading,
        view,
        page,
        hasMore,
        inited,
    }),
);

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const { error, loading, page, hasMore, inited } =
        useAppSelector(selectArticleProcess);

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !loading) {
            dispatch(articleListAction.setPage(page + 1));
            dispatch(fetchArticleList());
        }
    }, [page, hasMore, loading, dispatch]);

    useInitEffect(() => {
        if (!inited) {
            dispatch(articleListAction.initState());
            dispatch(initArticlesPage(searchParams));
        }
    });

    if (error) {
        return <Text description={error} type={ETypeText.ERROR} />;
    }

    return (
        <Page
            data-testid="ArticlePage"
            onScrollEnd={onLoadNextPart}
            className={classNames(styles.ArticlePage, {}, [className])}
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <ToggleFeatures
                    feature="enableAppRedesigned"
                    on={
                        <HStack gap={16} align="start">
                            <ArticleListWithView />
                            <FilterArticleList />
                        </HStack>
                    }
                    off={
                        <>
                            <FilterArticleList />
                            <ArticleListWithView />
                        </>
                    }
                />
            </DynamicModuleLoader>
        </Page>
    );
};

export default ArticlePage;
