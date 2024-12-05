/* eslint-disable @typescript-eslint/no-explicit-any */
import { TStateSchema } from '@/shared/config/storeConfig';
import { useAppSelector } from '../hooks';

type Selector<T, Args extends any[]> = (
    state: TStateSchema,
    ...args: Args
) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) => {
        return useAppSelector((state: TStateSchema) =>
            selector(state, ...args),
        );
    };

    return [useSelectorHook, selector];
}
