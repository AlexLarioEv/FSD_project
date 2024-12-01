import { TStateSchema } from '@/shared/config/storeConfig';

export const isLoadingProfileData = (state: TStateSchema) =>
    !!state.profile?.isLoading;
