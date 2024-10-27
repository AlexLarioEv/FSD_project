/* eslint-disable max-len */
import { FC,memo } from "react";

import { classNames } from "@/shared/lib";
import { ArticleList } from "@/entities/Article"

import styles from './ArticlePage.module.scss';

type TArticlePageProps = {
  className?: string;
};

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    return (
        <div className={classNames(styles.ArticlePage, {}, [className])}>
            <ArticleList articles={[]} />
        </div>
    );
};

export default memo(ArticlePage);
