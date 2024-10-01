import { TStateShema } from "@/app/providers/StoreProvider/config/types";

export const getCounterValue = (state:TStateShema) => state.counter.value;
