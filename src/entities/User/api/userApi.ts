import { rtkApi } from '@/shared/api/rtkApi';
import { TUser } from '../model/types';
import { TJsonSettings } from '../model/types/jsonSettings';

type TSetJsonSettingsArg = {
    userId: string;
    jsonSettings: TJsonSettings;
};

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<TUser, TSetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: '/users/' + userId,
                method: 'PATCH',
                body: { jsonSettings },
            }),
        }),
        getUserDataById: build.query<TUser, string>({
            query: (userId) => ({
                url: '/users/' + userId,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
