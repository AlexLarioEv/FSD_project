import { FC, memo } from 'react';
import { classNames } from '@/shared/lib';
import { Card, ECardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { ToggleFeatures } from '@/shared/lib/features';

import { TNotification } from '../../model/types/notification';

import styles from './NotificationItem.module.scss';
interface NotificationItemProps {
    className?: string;
    item: TNotification;
}

const NotificationItem: FC<NotificationItemProps> = ({ className, item }) => {
    const text = <Text title={item.title} description={item.description} />;

    const card = (
        <Card
            theme={ECardTheme.OUTLINED}
            className={classNames(styles.NotificationItem, {}, [className])}
        >
            {text}
        </Card>
    );

    const content = (
        <ToggleFeatures feature="enableAppRedesigned" on={text} off={card} />
    );

    if (item.href) {
        return (
            <a
                className={styles.link}
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
