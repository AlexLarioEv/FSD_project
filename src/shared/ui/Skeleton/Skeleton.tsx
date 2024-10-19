import { classNames } from '@/shared/lib';
import { CSSProperties, memo } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

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
            className={classNames(styles.Skeleton, {}, [className])}
            style={style}
        />
    );
});

Skeleton.displayName = 'Skeleton'

export {Skeleton};
