import { FC, memo, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib';

import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Button } from '@/shared/ui/Button';

import styles from './NotificationButton.module.scss';

type TNotificationButtonProps = {
    className?: string;
};

const NotificationButton: FC<TNotificationButtonProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = useMemo(
        () => (
            <Button onClick={() => setIsOpen(true)}>
                <Icon inverted Svg={NotificationIcon} />
            </Button>
        ),
        [],
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(styles.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                    direction="bottom left"
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};

export default memo(NotificationButton);
