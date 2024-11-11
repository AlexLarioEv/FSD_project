import { TStateSchema } from '@/shared/config/storeConfig';

import { createSelector } from "@reduxjs/toolkit";

export const getProfileData = ( state: TStateSchema) => state.profile

export const getFirstName = createSelector(getProfileData, (state) => state?.form?.first ?? state?.data?.first);
export const getLastName = createSelector(getProfileData, (state) => state?.form?.lastname ?? state?.data?.lastname);
export const getUsername = createSelector(getProfileData, (state) => state?.form?.username ?? state?.data?.username);
export const getCity = createSelector(getProfileData, (state) => state?.form?.city ?? state?.data?.city);
export const getCountry = createSelector(getProfileData, (state) => state?.form?.country ?? state?.data?.country);
export const getCurrency = createSelector(getProfileData, (state) => state?.form?.currency ?? state?.data?.currency);
export const getAvatar= createSelector(getProfileData, (state) => state?.form?.avatar ?? state?.data?.avatar);
export const getAge = createSelector(getProfileData, (state) => state?.form?.age ?? state?.data?.age)
export const getId = createSelector(getProfileData, (state) => state?.data?.id )
