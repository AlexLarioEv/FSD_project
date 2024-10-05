import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"

import {ReducerManager} from './types'

import {TStateSchemaKey, TStateSchema} from './types'

export function createReducerManager(initialReducers: ReducersMapObject<TStateSchema>):ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)
  
    let keysToRemove:TStateSchemaKey[] = []
  
    return {
        getReducerMap: () => reducers,

        reduce: (state:TStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key:TStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },
  

        remove: (key:TStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
  
            keysToRemove.push(key)
  
            combinedReducer = combineReducers(reducers)
        }
    }
}
