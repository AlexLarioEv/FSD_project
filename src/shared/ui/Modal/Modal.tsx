import { FC, ReactNode } from 'react';

import { classNames, TMods } from '@/shared/lib';
import { Portal } from '../Portal';

import styles from './Modal.module.scss';
import { useModalClosed } from '@/shared/lib/hooks';
import Overlay from '../Overlay/Overlay';

export type TModalProps = {
    isOpen: boolean;
    onClose?: VoidFunction;
    className?: string;
    children?: ReactNode;
};

export const Modal: FC<TModalProps> = ({
    isOpen,
    onClose,
    className,
    children,
}) => {
    const isClose = useModalClosed(isOpen);

    const mods: TMods = {
        [styles.opened]: isOpen,
        [styles.closed]: !isOpen,
    };

    return !isClose ? (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <Overlay onClick={onClose} />
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    ) : null;
};
