import { memo } from "react";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";
import { Avatar } from "@/shared/ui/Avatar";

import {TComment} from '../../model/types/types'

import styles from './CommentCard.module.scss';
import { Skeleton } from "@/shared/ui/Skeleton";

type TCommentCardProps = {
    comment: TComment;
    className?: string;
    isLoading?: boolean;
};

const skeleton = (
    <div className={styles.CommentCard}>
        <div className={styles.header}>
            <Skeleton width={30} height={30} border='50%'/>
            <Skeleton width={100} height={30}/>
        </div>
        <Skeleton/>
    </div>)

const CommentCard = memo(({ className, isLoading, comment }: TCommentCardProps) => {
    const {text, user} = comment;

    if(isLoading){
        return skeleton
    }

    return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <div className={styles.header}>
                <Avatar src={user.avatar}  size={30}/>
                <Text title={user.username}/>
            </div>
            <Text description={text} />
        </div>
    );
});

CommentCard.displayName = 'CommentCard';

export {CommentCard};