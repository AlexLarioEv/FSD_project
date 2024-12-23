import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Button.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

export enum EButtonTheme {
    BORDER = 'border',
    CLEAR = 'clear',
}

export enum EButtonSize {
    AUTO = 'size-auto',
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

export type TButtonProps = {
    className?: string;
    theme?: EButtonTheme;
    size?: EButtonSize;
    testId?: string;
    inverted?: boolean;
    danger?: boolean;
    padding?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const classThemeRedesignedMap = {
    [EButtonTheme.CLEAR]: styles.clearRedesigned,
    [EButtonTheme.BORDER]: styles.borderRedesigned,
};

const Button = memo(
    ({
        className,
        children,
        theme = EButtonTheme.CLEAR,
        size = EButtonSize.AUTO,
        testId,
        inverted,
        disabled,
        danger,
        padding,
        ...otherProps
    }: TButtonProps) => {
        const mods = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => ({
                [styles.invertedRedesigned]: inverted,
                [styles.disabledRedesigned]: disabled,
                [styles.dangerRedesigned]: danger,
                [styles.padding]: padding,
            }),
            off: () => ({
                [styles.inverted]: inverted,
                [styles.disabled]: disabled,
                [styles.danger]: danger,
                [styles.padding]: padding,
            }),
        });

        const classButton = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.ButtonRedesigned,
            off: () => styles.Button,
        });

        const classTheme = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => classThemeRedesignedMap[theme],
            off: () => styles[theme],
        });

        return (
            <button
                data-testid={testId}
                className={classNames(classButton, mods, [
                    className,
                    classTheme,
                    styles[size],
                ])}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export { Button };
