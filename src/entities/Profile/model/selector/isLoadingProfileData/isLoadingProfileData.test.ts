import { TStateSchema } from '@/shared/config/storeConfig';
import {isLoadingProfileData} from './isLoadingProfileData';
import { DeepPartial } from '@/shared/lib/helpers';

describe('isLoadingProfileData.test', ()=> {
    test('get loading state', ()=>{
        const state: DeepPartial<TStateSchema> = {
            profile: {
                isLoading: true,
            }
        }

        expect(isLoadingProfileData(state as TStateSchema)).toEqual(true)
    })

    test('get undefined state', ()=>{
        const state: DeepPartial<TStateSchema> = {};
        expect(isLoadingProfileData(state as TStateSchema)).toBe(false)
    })
})