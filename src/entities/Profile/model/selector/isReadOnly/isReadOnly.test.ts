import { TStateSchema } from '@/app/providers/StoreProvider';
import {isReadOnly} from './isReadOnly';
import { DeepPartial } from '@/shared/lib/helpers';

describe('isReadOnly', ()=> {
    test('get readonly state', ()=>{
        const state: DeepPartial<TStateSchema> = {
            profile: {
                readonly: true,
            }
        }

        expect(isReadOnly(state as TStateSchema)).toEqual(true)
    })

    test('get undefined state', () => {
        const state: DeepPartial<TStateSchema> = {};
        expect(isReadOnly(state as TStateSchema)).toBe(false)
    })
})