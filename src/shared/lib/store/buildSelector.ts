import { TStateSchema } from "@/shared/config/storeConfig"
import { useAppSelector } from "../hooks"

type Selector<T> = (state: TStateSchema) => T;
type Result<T> = [()=> T, Selector<T>]; 

export function buildSelector<T>(selector: Selector<T>):Result<T> {
    const useSelectorHook = () => {
        return useAppSelector(selector);
    }

    return [useSelectorHook, selector];
}