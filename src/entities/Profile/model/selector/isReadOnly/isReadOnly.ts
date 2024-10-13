import { TStateSchema } from "@/app/providers/StoreProvider";

export const isReadOnly = (state: TStateSchema) => !!state.profile?.readonly
