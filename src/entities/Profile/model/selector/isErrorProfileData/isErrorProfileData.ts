import { TStateSchema } from "@/app/providers/StoreProvider";


export const isErrorProfileData = (state: TStateSchema) => !!state.profile?.error