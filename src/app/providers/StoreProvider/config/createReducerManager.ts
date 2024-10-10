import { Action, combineReducers, Reducer } from "@reduxjs/toolkit";

import type {TStateSchema , TStateSchemaKey, Reducers, StaticReducers} from './types';

export function createReducerManager(initialReducers:StaticReducers) {
    const reducers: Partial<Reducers> = { ...initialReducers }

    let combinedReducer = combineReducers(reducers as Reducers)
  
    let keysToRemove: TStateSchemaKey[] = []
  
    return {
        getReducerMap: () => reducers,

        reduce: (state: Partial<TStateSchema>, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: TStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers as Reducers)
        },
  

        remove: (key:TStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
  
            keysToRemove.push(key)
  
            combinedReducer = combineReducers(reducers as Reducers)
        }
    }
}
