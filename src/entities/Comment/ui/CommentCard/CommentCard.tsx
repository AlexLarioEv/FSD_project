import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProfile } from '@/shared/config/routeConfig';

import { TComment } from '../../model/types/types';
import styles from './CommentCard.module.scss';

type TCommentCardProps = {
    comment: TComment;
    className?: string;
};

const CommentCard = memo(({ className, comment }: TCommentCardProps) => {
    const { text, user } = comment || {};

    return (
        <div
            data-testid={'CommentCard'}
            className={classNames(styles.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(user.id)} className={styles.header}>
                <Avatar src={user.avatar} size={30} />
                <Text title={user.username} />
            </AppLink>
            <Text description={text} />
        </div>
    );
});

CommentCard.displayName = 'CommentCard';

export { CommentCard };
