import { TStateSchema } from '@/app/providers/StoreProvider';
import {isErrorProfileData} from './isErrorProfileData';
import { DeepPartial } from '@/shared/lib/helpers';
import { EErrorValidateForm } from '../../types/ProfileSchema';

describe('isErrorProfileData.test', ()=> {
    test('get error list', ()=>{
        const errorList = [EErrorValidateForm.AGE_NOT_CORRECT, EErrorValidateForm.AGE_NOT_CORRECT]

        const state: DeepPartial<TStateSchema> = {
            profile: {
                error: errorList
            }
        }

        expect(isErrorProfileData(state as TStateSchema)).toEqual(errorList)
    })

    test('get undefined state', ()=>{
        const state: DeepPartial<TStateSchema> = {};
        expect(isErrorProfileData(state as TStateSchema)).toBe(undefined)
    })
})