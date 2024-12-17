import { FC } from 'react';

import { classNames } from '@/shared/lib';
import Logo from '@/shared/assets/icons/logo.svg';
import LogoSmall from '@/shared/assets/icons/logoSmall.svg';

import styles from './AppLogo.module.scss';
import { HStack } from '../Stack';

type TSize = 'small' | 'big';

type TAppLogoProps = {
    className?: string;
    size?: TSize;
};

export const AppLogo: FC<TAppLogoProps> = ({ className, size = 'big' }) => {
    const isBig = size === 'big';
    return (
        <HStack
            max
            justify="center"
            className={classNames(styles.appLogoWrapper, {}, [className])}
        >
            {isBig ? (
                <Logo className={styles.logo} />
            ) : (
                <LogoSmall className={styles.logo} />
            )}
            <div
                className={classNames(styles.gradientBig, {
                    [styles.smallestGradientBig]: !isBig,
                })}
            />
            <div
                className={classNames(styles.gradientSmall, {
                    [styles.smallestGradientSmall]: !isBig,
                })}
            />
        </HStack>
    );
};
