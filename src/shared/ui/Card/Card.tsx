import {  PropsWithChildren, FC, HTMLAttributes } from "react";

import { classNames } from "@/shared/lib";

import styles from './Card.module.scss';

type TCardProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Card: FC<PropsWithChildren<TCardProps>> = ({ className, children, ...otherProps }) => {
    return (
        <div {...otherProps} className={classNames(styles.Card, {}, [className])}>
            {children}
        </div>
    );
};