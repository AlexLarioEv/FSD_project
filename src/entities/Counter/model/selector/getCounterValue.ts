import { TStateSchema } from "@/shared/config/storeConfig/types";
import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue ,getCounterValue] =  buildSelector((state:TStateSchema) => state.counter.value);
