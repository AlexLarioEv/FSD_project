import { FC, PropsWithChildren } from "react";

import { classNames } from "@/shared/lib";

import styles from './Flex.module.scss';

type TFlexJustify = 'start' | 'end' | 'center' | 'between';
type TFlexAling = 'start' | 'end' | 'center';
type TFlexDirection = 'column' | 'row';
type TFlexGap = 4 | 8 | 16 | 32;

export type TFlexProps = {
    className?: string;
    justify?: TFlexJustify;
    aling?: TFlexAling;
    direction?: TFlexDirection;
    gap?: TFlexGap;
    max?: boolean;
};

const justifyClassMap: Record<TFlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween
}

const alingClassMap: Record<TFlexAling, string> = {
    start: styles.alingStart,
    center: styles.alingCenter,
    end: styles.alingEnd,
}

const gapClassMap: Record<TFlexGap, string> = {
    '4': styles.gap4,
    '8': styles.gap8,
    '16': styles.gap16,
    '32': styles.gap32,
}

export const Flex: FC<PropsWithChildren<TFlexProps>> = ({ 
    className,
    children,
    justify,
    aling ,
    direction,
    gap,
    max
}) => {
    
    const classes = [
        justify && justifyClassMap[justify],
        aling && alingClassMap[aling],
        direction && styles[direction], 
        gap && gapClassMap[gap], 
        className
    ];
    
    return (  
        <div className={classNames(styles.Flex, {[styles.max]: max}, classes)}>
            {children}
        </div>
    );
};