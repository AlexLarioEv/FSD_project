import { TStateSchema } from "@/shared/config/storeConfig/types";

export const getCounterValue = (state:TStateSchema) => state.counter.value;
