import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib";

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
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: FC<TButtonProps> = (
    { className, children,theme = EButtonTheme.CLEAR, size, testId, ...otherProps }) => {
    
    return (
        <button data-testid={testId} 
            className={classNames(styles.Button, {}, [
                className, 
                styles[theme], 
                styles[size]])} 
            {...otherProps}>
            {children}
        </button>
    );
};
