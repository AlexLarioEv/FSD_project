import { useEffect } from 'react';

import { useCurrent } from '../useCurrent/useCurrent';

export function useIgnoreEffectDeps(
    callback: () => void,
    deps: unknown[],
): void {
    const callbackRef = useCurrent(callback);
    useEffect(() => {
        return callbackRef.current();
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
