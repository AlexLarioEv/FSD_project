import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib';
import { TTestProps } from '@/shared/lib/types';
import { toggleFeatures } from '@/shared/lib/features';

import styles from './Skeleton.module.scss';

interface SkeletonProps extends TTestProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    const classSkeleton = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.SkeletonRedesigned,
        off: () => styles.Skeleton,
    });

    return (
        <div
            data-testid={props['data-testid']}
            className={classNames(classSkeleton, {}, [className])}
            style={style}
        />
    );
});

Skeleton.displayName = 'Skeleton';

export { Skeleton };
