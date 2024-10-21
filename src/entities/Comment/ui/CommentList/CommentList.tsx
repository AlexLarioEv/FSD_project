import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";

import { CommentCard } from "../CommentCard/CommentCard";
import {CommentCardLoading} from '../CommentCard/CommentCardLoading';
import { TComment } from "../../model/types/types";

import styles from './CommentList.module.scss';

type TCommentListProps = {
    isLoading: boolean;
    className?: string;
    comments?: TComment[]
    error?: string;
};

const CommentList = memo(({ className, comments, isLoading }: TCommentListProps) => {

    const {t} = useTranslation('articleDetails')

    const commentList = useMemo(()=> comments?.length ? comments?.map((comment)=> {
        return <CommentCard comment={comment} key={comment.id}/>
    }): <Text description={t('no_comments_found')}/>,
    [comments,t])

    if(isLoading){
        return (
            <div className={classNames(styles.CommentList, {}, [className])}>
                <CommentCardLoading isLoading />
                <CommentCardLoading isLoading />
                <CommentCardLoading isLoading />
            </div>
        )
    }

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {commentList}
        </div>
    );
});

CommentList.displayName = 'CommentList';

export {CommentList};