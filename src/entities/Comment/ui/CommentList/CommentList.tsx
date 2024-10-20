import { memo, useMemo } from "react";

import { classNames } from "@/shared/lib";

import styles from './CommentList.module.scss';
import { TComment } from "../../model/types/types";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";

type TCommentListProps = {
    isLoading: boolean;
    className?: string;
    comments?: TComment[]
    error?: string;
};

const CommentList = memo(({ className, comments, isLoading }: TCommentListProps) => {

    const {t} = useTranslation('articleDetails')

    const commentList = useMemo(()=> comments?.length ? comments?.map((comment)=> {
        return <CommentCard isLoading={isLoading} comment={comment} key={comment.id}/>
    }): <Text description={t('no_comments_found')}/>,[comments, isLoading,t])

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {commentList}
        </div>
    );
});

CommentList.displayName = 'CommentList';

export {CommentList};