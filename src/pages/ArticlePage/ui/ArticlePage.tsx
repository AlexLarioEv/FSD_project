import { FC,memo } from "react";

import { classNames } from "@/shared/lib";

import styles from './ArticlePage.module.scss';

type TArticlePageProps = {
  className?: string;
};

const ArticlePage: FC<TArticlePageProps> = ({ className }) => {
    return (
        <div className={classNames(styles.ArticlePage, {}, [className])}/>
    );
};

export default memo(ArticlePage);
