import { memo } from "react";

import { classNames } from "@/shared/lib";

import avatar from '@/shared/assets/icons/avatar.jpg'
import styles from "./Avatar.module.scss";

type TAvatarProps = {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
};

const Avatar = memo(({ className, src=avatar, alt='', size = 40}: TAvatarProps) => {

    return (
        <img
            className={classNames(styles.Avatar,{}, [className] )}
            style={{width: size, height: size}}
            src={src || avatar}
            alt={alt}
        />
    );
});

Avatar.displayName = 'Avatar';

export {Avatar};