import { getCounterValue } from "./getCounterValue";
import { TStateShema } from "@/app/providers/StoreProvider/config/types";
import { DeepPartial } from "@/shared/lib/helpers";

describe('getCounter', ()=>{
    test('should return counter value', ()=> {
        const state: DeepPartial<TStateShema> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as TStateShema)).toEqual(10)
    })
})
