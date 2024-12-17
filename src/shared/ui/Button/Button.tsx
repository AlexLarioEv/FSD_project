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
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
        ...otherProps
    }: TButtonProps) => {
        const mods = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => ({
                [styles.invertedRedesigned]: inverted,
                [styles.disabledRedesigned]: disabled,
                [styles.dangerRedesigned]: danger,
            }),
            off: () => ({
                [styles.inverted]: inverted,
                [styles.disabled]: disabled,
                [styles.danger]: danger,
            }),
        });

        const classButton = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.ButtonRedesigned,
            off: () => styles.Button,
        });

        return (
            <button
                data-testid={testId}
                className={classNames(classButton, mods, [
                    className,
                    styles[theme],
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
