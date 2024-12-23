import { PropsWithChildren, FC, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Card.module.scss';
import { TTestProps } from '@/shared/lib/types';
import { toggleFeatures } from '@/shared/lib/features';

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export enum ECardThemeRedesigned {
    NORMAL = 'normalRedesigned',
    OUTLINED = 'outlinedRedesigned',
}

type TCardProps = {
    className?: string;
    theme?: ECardTheme;
    padding?: boolean;
} & HTMLAttributes<HTMLDivElement> &
    TTestProps;

const mapToRedesigned = {
    [ECardTheme.NORMAL]: ECardThemeRedesigned.NORMAL,
    [ECardTheme.OUTLINED]: ECardThemeRedesigned.OUTLINED,
};

export const Card: FC<PropsWithChildren<TCardProps>> = (props) => {
    const {
        className,
        children,
        theme = ECardTheme.NORMAL,
        padding = true,
        ...otherProps
    } = props;

    const classTheme = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles[mapToRedesigned[theme]],
        off: () => styles[theme],
    });

    const classCard = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.CardRedesigned,
        off: () => styles.Card,
    });

    return (
        <div
            data-testid={props['data-testid'] ?? 'Card'}
            {...otherProps}
            className={classNames(classCard, { [styles.padding]: padding }, [
                className,
                classTheme,
            ])}
        >
            {children}
        </div>
    );
};
