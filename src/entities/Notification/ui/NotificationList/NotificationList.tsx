import { memo, FC } from 'react';

import { classNames } from '@/shared/lib';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { useNotifications } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap={16} className={classNames('', {}, [className])}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack gap={16} max className={classNames('', {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
};

export default memo(NotificationList);
