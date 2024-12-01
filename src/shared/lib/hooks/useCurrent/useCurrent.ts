import { MutableRefObject, useRef } from 'react';

export const useCurrent = <T>(value: T): MutableRefObject<T> => {
    const valueRef = useRef<T>(value);
    valueRef.current = value;

    return valueRef;
};
