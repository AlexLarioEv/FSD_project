import { TStateSchema } from "@/app/providers/StoreProvider/config/types";

export const getUserPassword = (state: TStateSchema) => state.login.password;