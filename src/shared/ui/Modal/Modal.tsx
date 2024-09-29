import { FC, ReactNode, useEffect, useState , useRef} from "react";

import { classNames } from "shared/lib";
import { Portal } from "../Portal";

import styles from './Modal.module.scss';

export type TModalProps = {
    isOpen: boolean
    onClose: VoidFunction
    className?: string;
    children?: ReactNode;
};

export const Modal: FC<TModalProps> = ({ isOpen,onClose,className, children }) => {

    const [isClose, setIsClose] = useState(true);
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.closed]: !isOpen,
    }

    useEffect(()=>{
        if(!isOpen){
            timerId.current = setTimeout(()=> setIsClose(true), 300)
        } else {
            setIsClose(false)
        }
    },[isOpen]);
    

    useEffect(()=>()=>{
        clearTimeout( timerId.current)
    },[])
    return (
        !isClose && <Portal >
            <div className={classNames(styles.Modal, mods, [className])}>
                <div onClick={onClose} className={styles.overlay}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.content}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};