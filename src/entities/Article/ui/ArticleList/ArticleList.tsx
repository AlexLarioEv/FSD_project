import { FC, useMemo } from "react";

import { classNames } from "@/shared/lib";

import { ArticleItem } from '../ArticleItem/ArticleItem';

import styles from './ArticleList.module.scss';
import { EArticleView, TArticle } from "../../model/types/ArticleSchema";

type TArticleListProps = {
    className?: string;
    view?: EArticleView;
    articles: TArticle[];
};

export const ArticleList: FC<TArticleListProps> = ({ className, view = EArticleView.SMALL, articles }) => {
    
    const articleItem = useMemo(()=> articles.map((article, index) => <ArticleItem key={index} article={article} view={view}/> 
    ),[articles, view])

    
    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articleItem}
        </div>
    );
};