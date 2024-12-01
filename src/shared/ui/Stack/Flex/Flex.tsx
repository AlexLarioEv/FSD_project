import { FC, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Flex.module.scss';
import { TTestProps } from '@/shared/lib/types';

type TFlexJustify = 'start' | 'end' | 'center' | 'between';
type TFlexAlign = 'start' | 'end' | 'center';
type TFlexDirection = 'column' | 'row';
type TFlexGap = 4 | 8 | 16 | 32;

export type TFlexProps = {
    className?: string;
    justify?: TFlexJustify;
    align?: TFlexAlign;
    direction?: TFlexDirection;
    gap?: TFlexGap;
    max?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
    TTestProps;

const justifyClassMap: Record<TFlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClassMap: Record<TFlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const gapClassMap: Record<TFlexGap, string> = {
    '4': styles.gap4,
    '8': styles.gap8,
    '16': styles.gap16,
    '32': styles.gap32,
};

export const Flex: FC<PropsWithChildren<TFlexProps>> = (props) => {
    const { className, children, justify, align, direction, gap, max } = props;
    const classes = [
        justify && justifyClassMap[justify],
        align && alignClassMap[align],
        direction && styles[direction],
        gap && gapClassMap[gap],
        className,
    ];

    return (
        <div
            data-testid={props['data-testid']}
            className={classNames(styles.Flex, { [styles.max]: max }, classes)}
        >
            {children}
        </div>
    );
};
