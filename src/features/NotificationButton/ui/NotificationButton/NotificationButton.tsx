import { FC, memo } from "react";

import { classNames } from "@/shared/lib";

import styles from './NotificationButton.module.scss';
import { Popover } from "@/shared/ui/Popups";
import { Icon } from "@/shared/ui/Icon";
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { NotificationList } from "@/entities/Notification";

type TNotificationButtonProps = {
    className?: string;
};

const NotificationButton: FC<TNotificationButtonProps> = ({ className }) => {

    return (<Popover 
        className={classNames(styles.NotificationButton, {}, [className])} 
        trigger={
            <Icon 
                inverted 
                Svg={NotificationIcon}
            />}
        direction='bottom left'>
        <NotificationList className={styles.notifications}/>
    </Popover>)
};

export default memo(NotificationButton);