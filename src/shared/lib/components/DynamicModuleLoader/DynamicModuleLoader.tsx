import {FC, PropsWithChildren} from 'react'
import { useStore,useDispatch} from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import {useIgnoreEffectDeps} from '@/shared/hooks'
import {ReduxStoreWithManager, TStateSchemaKey} from '@/app/providers/StoreProvider/config'

export type TReducerList = {
    [key in TStateSchemaKey]?: Reducer
}

type ReducerListEntry = [TStateSchemaKey, Reducer]

type TDynamicModuleRenderProps = PropsWithChildren<
{
    reducers: TReducerList;
    removeAfterUnmount?: boolean;
}>;

export const DynamicModuleLoader:FC<TDynamicModuleRenderProps> = ({
    children, 
    reducers,
    removeAfterUnmount = true, 
}) =>{

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useIgnoreEffectDeps(()=> {
        Object.entries(reducers).forEach(([nameReducer, reducer]: ReducerListEntry) =>{
            store.reducerManager.add( nameReducer ,reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })
        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameReducer]: ReducerListEntry) =>{
                    store.reducerManager.remove(nameReducer)
                    dispatch({type: `@DESTROY ${nameReducer} reducer`})
                })
            }
        }
    },[])


    return (
        <>
            {children}
        </>
    )
}