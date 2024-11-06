import  { memo, ReactNode, useEffect, useState } from 'react';
import { classNames, TMods } from '@/shared/lib';

import Overlay from '../Overlay/Overlay';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {

    const [isClose, setIsClose] = useState(false);

    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const mods: TMods = {
        [styles.opened]: isOpen,
        // [styles.closed]: !isOpen,
    };

    useEffect(()=> {
        if(!isOpen){
            setTimeout(()=> setIsClose(true), 300)
        }
    },[isOpen])

    return (
        isClose ? <Portal>
            <div className={classNames(styles.Drawer, mods, [className])}>
                <Overlay onClick={onClose} />
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal> : null
    );
};

export default memo(Drawer);
