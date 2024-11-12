import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Skeleton.module.scss';
import { TTestProps } from '@/shared/lib/types';

interface SkeletonProps extends TTestProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
};

const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            data-testid={props["data-testid"]}
            className={classNames(styles.Skeleton, {}, [className])}
            style={style}
        />
    );
});

Skeleton.displayName = 'Skeleton'

export {Skeleton};
