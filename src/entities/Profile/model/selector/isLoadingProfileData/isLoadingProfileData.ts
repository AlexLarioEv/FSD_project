import { TStateSchema } from "@/app/providers/StoreProvider";


export const isLoadingProfileData = (state: TStateSchema) => !!state.profile?.isLoading