import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {ArticleDetails, articleReducer} from '@/entities/Article'
import {CommentList} from '@/entities/Comment'
import { classNames } from "@/shared/lib";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { Text } from "@/shared/ui/Text";

import {isLoadingArticleDetailsComment} from '../../model/selectors/comments'
import {articleDetailsCommentReducer, getArticleComments} from '../../model/slices/articleDetailsCommentSlice';
import { fetchCommentById } from "../../model/services/fetchCommentById";

import styles from "./ArticleDetailsPage.module.scss"
import { useAppDispatch, useInitEffect } from "@/shared/hooks";
import { AddCommentForm } from "@/features/AddCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
type TArticleDetailsPageProps = {
  className?: string;
};

const reducers:TReducerList = {
    article: articleReducer,
    articleDetailsComment: articleDetailsCommentReducer,
} 

const ArticleDetailsPage: FC<TArticleDetailsPageProps> = ({ className }) => {
    const dispatch =  useAppDispatch();

    const {t} = useTranslation('articleDetails')
    const {id} =  useParams()

    const commments = useSelector(getArticleComments.selectAll)
    const isCommentLoading = useSelector(isLoadingArticleDetailsComment)

    const handleSendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    }

    useInitEffect(()=> {
        dispatch(fetchCommentById(String(id)))

    })

    return (
        <DynamicModuleLoader  reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames('', {}, [className])}>
                {id ? <ArticleDetails className={styles.articleDetails} id={id} /> : null}
                <Text title= {t('comment')}/>
                <AddCommentForm onSendComment={handleSendComment} className={styles.addCommentForm}/>
                <CommentList isLoading={isCommentLoading} comments={commments}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);