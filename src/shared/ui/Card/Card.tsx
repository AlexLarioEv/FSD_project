import {  PropsWithChildren, FC, HTMLAttributes } from "react";

import { classNames } from "@/shared/lib";

import styles from './Card.module.scss';

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}


type TCardProps = {
    className?: string;
    theme?: ECardTheme;
} & HTMLAttributes<HTMLDivElement>;

export const Card: FC<PropsWithChildren<TCardProps>> = ({ className, children, theme = ECardTheme.NORMAL, ...otherProps }) => {
    return (
        <div {...otherProps} className={classNames(styles.Card, {}, [className, styles[theme]])}>
            {children}
        </div>
    );
};