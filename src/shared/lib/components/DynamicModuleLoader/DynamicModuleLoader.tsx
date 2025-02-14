import { FC, PropsWithChildren, useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { useIgnoreEffectDeps } from '../../hooks';
import {
    ReduxStoreWithManager,
    TStateSchemaKey,
} from '@/shared/config/storeConfig';
import { Loader } from '@/shared/ui/Loader';

import styles from './DynamicModuleLoader.module.scss';

export type TReducerList = {
    [key in TStateSchemaKey]?: Reducer;
};

type TDynamicModuleRenderProps = PropsWithChildren<{
    reducers: TReducerList;
    removeAfterUnmount?: boolean;
}>;

export const DynamicModuleLoader: FC<TDynamicModuleRenderProps> = ({
    children,
    reducers,
    removeAfterUnmount = true,
}) => {
    const [initReducer, setInitReducer] = useState(false);

    const store = useStore() as ReduxStoreWithManager;
    const mountedReducers = store.reducerManager.getReducerMap();
    const dispatch = useDispatch();

    useIgnoreEffectDeps(() => {
        Object.entries(reducers).forEach(([nameReducer, reducer]) => {
            const mounted = mountedReducers[nameReducer as TStateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(
                    nameReducer as TStateSchemaKey,
                    reducer,
                );
                dispatch({ type: `@INIT ${nameReducer} reducer` });
            }
            setInitReducer(true);
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameReducer]) => {
                    store.reducerManager.remove(nameReducer as TStateSchemaKey);
                    dispatch({ type: `@DESTROY ${nameReducer} reducer` });
                });
            }
        };
    }, []);

    return (
        <>
            {initReducer ? (
                children
            ) : (
                <div className={styles.loaderWrapper}>
                    <Loader />
                </div>
            )}
        </>
    );
};
