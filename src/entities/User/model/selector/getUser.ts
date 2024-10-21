import {TStateSchema} from '@/app/providers/StoreProvider'

export const getUser = (state: TStateSchema) => state.user;
export const isAuth = (state: TStateSchema) => !!state.user.auth;
export const isInit = (state: TStateSchema) => state.user._init
export const getAuthData = (state: TStateSchema) => state.user.auth;