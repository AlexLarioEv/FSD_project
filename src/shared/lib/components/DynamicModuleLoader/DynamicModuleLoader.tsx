import {FC, PropsWithChildren} from 'react'
import { useStore,useDispatch} from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import {useIgnoreEffectDeps} from '@/shared/hooks'
import {ReduxStoreWithManager, TStateSchemaKey} from '@/app/providers/StoreProvider/config'

export type TReducerList = {
    [key in TStateSchemaKey]?: Reducer
}

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
        Object.entries(reducers).forEach(([nameReducer, reducer]) =>{
            store.reducerManager.add( nameReducer as TStateSchemaKey,reducer)
            dispatch({type: `@INIT ${nameReducer} reducer`})
        })
        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameReducer]) =>{
                    store.reducerManager.remove(nameReducer as TStateSchemaKey)
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