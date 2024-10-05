import {FC, useEffect, PropsWithChildren} from 'react'
import { Reducer } from '@reduxjs/toolkit'
import {ReduxStoreWithManager, TStateSchemaKey} from '@/app/providers/StoreProvider/config'
import { useStore,useDispatch} from 'react-redux'

export type ReducerList = {
    [key in TStateSchemaKey]?: Reducer
}

type ReducerListEntry = [TStateSchemaKey, Reducer]

type TDynamicModuleRenderProps = PropsWithChildren<
{
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}>;

export const DynamicModuleRender:FC<TDynamicModuleRenderProps> = ({
    children, 
    reducers,
    removeAfterUnmount = true, 
}) =>{

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(()=> {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <>
            {children}
        </>
    )
}