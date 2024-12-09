import { FC } from 'react';

import { classNames } from '@/shared/lib';
import Logo from '@/shared/assets/icons/logo.svg';

import styles from './AppLogo.module.scss';
import { HStack } from '../Stack';

type TAppLogoProps = {
    className?: string;
};

export const AppLogo: FC<TAppLogoProps> = ({ className }) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(styles.appLogoWrapper, {}, [className])}
        >
            <Logo className={styles.logo} />
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
        </HStack>
    );
};
