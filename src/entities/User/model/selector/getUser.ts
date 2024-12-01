import { TStateSchema } from '@/shared/config/storeConfig';
import { createSelector } from '@reduxjs/toolkit';
import { ERoleUser } from '../types/UserSchema';

export const getUser = (state: TStateSchema) => state.user;
export const isAuth = (state: TStateSchema) => !!state.user.auth;
export const isInit = (state: TStateSchema) => state.user._init;
export const getAuthData = (state: TStateSchema) => state.user.auth;
export const getRoles = (state: TStateSchema) => state.user.auth?.role;

export const isManager = createSelector(getRoles, (roles) =>
    roles?.includes(ERoleUser.MANAGER),
);
export const isAdmin = createSelector(getRoles, (roles) =>
    roles?.includes(ERoleUser.ADMIN),
);
