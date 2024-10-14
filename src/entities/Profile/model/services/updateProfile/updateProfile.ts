import { createAsyncThunk } from "@reduxjs/toolkit";

import { TAsyncThunk } from '@/app/providers/StoreProvider';

import {validateProfileData} from '../validateProfileData/validateProfileData'
import {getProfileData} from '../../selector'
import { TProfile, TErrorList, EErrorValidateForm  } from '../../types/ProfileSchema';

export const updateProfile = createAsyncThunk<TProfile, void, TAsyncThunk<TErrorList>>(
    'profile/updateProfileData',
    async (_, {extra, rejectWithValue, getState}) => {
        try {
            const form = getProfileData(getState())?.form
            
            const errorList = validateProfileData(form)

            if(errorList.length){
                return rejectWithValue(errorList)
            }

            const response = await extra.api.put<TProfile>('/profile', form);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue([EErrorValidateForm.SERVER_ERROR]);
        }
    },
)