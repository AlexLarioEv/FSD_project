import { memo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { toggleFeatures } from '@/shared/lib/features';

export enum EApplinkTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type TAppLinkProps = LinkProps & {
    className?: string;
    type?: EApplinkTypes;
};

const AppLink = memo(
    ({
        className,
        children,
        type = EApplinkTypes.PRIMARY,
        ...otherProps
    }: TAppLinkProps) => {
        const textClass = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () =>
                type === EApplinkTypes.SECONDARY
                    ? styles.secondaryRedesigned
                    : styles.primaryRedesigned,
            off: () =>
                type === EApplinkTypes.SECONDARY
                    ? styles.secondary
                    : styles.primary,
        });

        return (
            <Link
                className={classNames(styles.AppLink, {}, [
                    className,
                    textClass,
                ])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);

AppLink.displayName = 'AppLink';

export { AppLink };
