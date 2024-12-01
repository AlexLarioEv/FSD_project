import { useEffect, useRef, useState } from 'react';

export const useModalClosed = (isOpen: boolean) => {
    const [isClose, setIsClose] = useState(true);
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (!isOpen) {
            timerId.current = setTimeout(() => setIsClose(true), 300);
        } else {
            setIsClose(false);
        }
    }, [isOpen]);

    useEffect(
        () => () => {
            clearTimeout(timerId.current);
        },
        [],
    );

    return isClose;
};
