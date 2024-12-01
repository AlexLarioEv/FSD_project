import { FC, memo } from 'react';
import { classNames } from '@/shared/lib';
import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

const Overlay: FC<OverlayProps> = ({ className, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={classNames(styles.Overlay, {}, [className])}
        />
    );
};

export default memo(Overlay);
