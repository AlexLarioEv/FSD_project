import { TStateSchema } from "@/app/providers/StoreProvider/config/types";

export const getUserName = (state: TStateSchema) => state.login.username;