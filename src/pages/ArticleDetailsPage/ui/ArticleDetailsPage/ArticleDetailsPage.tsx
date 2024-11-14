import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";
import { ArticleDetails, articleReducer } from '@/entities/Article'
import { classNames } from "@/shared/lib";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { Text } from "@/shared/ui/Text";

import {articleDetailsCommentReducer} from '../../model/slices/articleDetailsCommentSlice';

import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsHeader } from "../ArticleDetailsHeader/ArticleDetailsHeader";

import styles from "./ArticleDetailsPage.module.scss"
import { ArticleRating } from "@/features/ArticleRating";
type TArticleDetailsPageProps = {
  className?: string;
};

const reducers:TReducerList = {
    article: articleReducer,
    articleDetailsComment: articleDetailsCommentReducer,
} 

const ArticleDetailsPage: FC<TArticleDetailsPageProps> = ({ className }) => {
    const {t} = useTranslation('articleDetails');
    const {id} =  useParams();

    if(!id){
        return <Text description={t('not_fund_article')}/>
    }

    return (
        <DynamicModuleLoader  reducers={reducers}>
            <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
                <ArticleDetailsHeader id={id} />
                <ArticleDetails id={id} />
                <ArticleRating  id={id}/>
                <ArticleDetailsComments id={id}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
