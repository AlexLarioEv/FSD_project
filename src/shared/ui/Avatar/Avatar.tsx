import { memo } from "react";

import { classNames } from "@/shared/lib";

import Profile from '@/shared/assets/icons/profile.svg'
import { AppImage } from "../AppImage";
import { Skeleton } from "../Skeleton";
import { Icon } from "../Icon";

import styles from "./Avatar.module.scss";

type TAvatarProps = {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
};

const Avatar = memo(({ className, src, alt='', size = 40}: TAvatarProps) => {

    return (
        <AppImage
            data-testid={"avatar"}
            className={classNames(styles.Avatar,{}, [className] )}
            style={{width: size, height: size}}
            src={src}
            alt={alt}
            fallbackLoading={<Skeleton data-testid="loading" width={40} border="50%" height={40}/>}
            fallbackError={<Icon Svg={Profile}/>}
        />
    );
});

Avatar.displayName = 'Avatar';

export {Avatar};