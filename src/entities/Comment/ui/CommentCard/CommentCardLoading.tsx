import { FC } from 'react';

import { classNames } from '@/shared/lib';
import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './CommentCard.module.scss';

type TCommentCardLoadingProps = {
    className?: string;
    isLoading?: boolean;
};

export const CommentCardLoading: FC<TCommentCardLoadingProps> = ({
    className,
    isLoading,
}) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div
            className={classNames(styles.CommentCard, {}, [
                styles.loading,
                className,
            ])}
        >
            <div className={styles.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={100} height={30} />
            </div>
            <Skeleton />
        </div>
    );
};
