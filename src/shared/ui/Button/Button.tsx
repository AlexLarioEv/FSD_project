import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './Button.module.scss';

export enum EButtonTheme  {
    BORDER = 'border',
    CLEAR = 'clear',
}

export enum EButtonSize  {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl'
}

export type TButtonProps = {
    className?: string;
    theme?: EButtonTheme;
    size?: EButtonSize;
    testId?: string;
    inverted?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: FC<TButtonProps> = (
    { className, children,theme = EButtonTheme.CLEAR, size, testId,inverted, disabled, ...otherProps }) => {
    
    const mods: Record<string, boolean> = {
        [styles.inverted]: inverted,
        [styles.disabled]: disabled
    }

    return (
        <button data-testid={testId} 
            className={classNames(styles.Button, mods, [
                className, 
                styles[theme], 
                styles[size]])} 
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    );
};
