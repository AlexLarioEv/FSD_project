import { FC, useMemo } from "react";

import { classNames } from "@/shared/lib";

import { ArticleItem } from '../ArticleItem/ArticleItem';

import styles from './ArticleList.module.scss';
import { EArticleView, TArticle } from "../../model/types/ArticleSchema";
import { ArticleItemLoading } from "../ArticleItem/ArticleItemLoading";

type TArticleListProps = {
    className?: string;
    view: EArticleView;
    isLoading?: boolean;
    articles: TArticle[];
};

export const ArticleList: FC<TArticleListProps> = ({ className, view, articles, isLoading }) => {
    
    const articleItem = useMemo(()=> articles.map((article, index) => (
        <ArticleItem 
            key={index} 
            article={article} 
            view={view}
        />
    )),[articles, view])

    if(isLoading){
        const skeleton = Array(10).fill(0).map((_, index) => <ArticleItemLoading key={index} view={view} />);
        return <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>{skeleton}</div>
    }
    
    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articleItem}
        </div>
    );
};