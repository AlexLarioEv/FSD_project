import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";


import { EArticleView, TArticle } from "../../model/types/ArticleSchema";
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemLoading } from "../ArticleItem/ArticleItemLoading";

import styles from './ArticleList.module.scss';
import { Flex } from "@/shared/ui/Stack";

type TArticleListProps = {
    className?: string;
    view: EArticleView;
    isLoading?: boolean;
    articles: TArticle[];
};

export const ArticleList: FC<TArticleListProps> = ({ className, view, articles, isLoading }) => {
    const {t} = useTranslation()
    
    const articleItem = useMemo(()=> articles.map((article, index) => (
        <ArticleItem 
            key={index} 
            article={article} 
            view={view}
        />
    )),[articles, view])

    const skeleton = Array(10).fill(0).map((_, index) => <ArticleItemLoading key={index} view={view} />);

    if(articles.length == 0 && !isLoading) {
        return <Text title={t('not_fund')}/>
    }
    
    return (
        <Flex
            data-testid="ArticleList"
            max 
            gap={16} 
            direction={EArticleView.BIG === view ? 'column' : 'row'} 
            className={classNames(styles.ArticleList, {}, [className, styles[view]])}
        >
            {articleItem}
            {isLoading && skeleton}
        </Flex>
    );
};