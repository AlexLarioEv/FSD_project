import {  PropsWithChildren, FC, HTMLAttributes } from "react";

import { classNames } from "@/shared/lib";

import styles from './Card.module.scss';
import { TTestProps } from "@/shared/lib/types";

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}


type TCardProps = {
    className?: string;
    theme?: ECardTheme;
} & HTMLAttributes<HTMLDivElement> & TTestProps;

export const Card: FC<PropsWithChildren<TCardProps>> = (props) => {
    const { className, children, theme = ECardTheme.NORMAL, ...otherProps }= props

    return (
        <div 
            data-testid={props["data-testid"] ?? "Card"} 
            {...otherProps} 
            className={classNames(styles.Card, {}, [className, styles[theme]])}>
            {children}
        </div>
    );
};