import { TStateSchema } from "@/app/providers/StoreProvider/config/types";

export const getCounterValue = (state:TStateSchema) => state.counter.value;
