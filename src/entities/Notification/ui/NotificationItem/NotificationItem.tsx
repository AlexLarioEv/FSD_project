import { FC, memo } from 'react';
import { classNames } from '@/shared/lib';
import { Card, ECardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { TNotification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';
interface NotificationItemProps {
    className?: string;
    item: TNotification;
}

const NotificationItem: FC<NotificationItemProps> = ({ className, item }) => {
    const content = (
        <Card
            theme={ECardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} description={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
};

export default memo(NotificationItem);
