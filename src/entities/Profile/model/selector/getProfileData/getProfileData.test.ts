import { TStateSchema } from '@/app/providers/StoreProvider';
import {getProfileData} from './getProfileData';
import { DeepPartial } from '@/shared/lib/helpers';
import { EErrorValidateForm, TProfileSchema } from '../../types/ProfileSchema';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

describe('getProfileData', ()=> {
    test('get state', ()=>{

        const profile: TProfileSchema = {
            data: {
                id: '1', 
                first: 'Иван',
                lastname: 'Иванов',
                age: 12,
                currency: ECurrency.EUR,
                country: ECountry.ARMENIA,
                city: 'New Your',
                username: 'Ivan',
                avatar: ''
            },
            isLoading: true,
            error: [EErrorValidateForm.AGE_NOT_CORRECT],
            readonly: true,
        }

        const state: DeepPartial<TStateSchema> = {
            profile
        }

        expect(getProfileData(state as TStateSchema)).toEqual(profile)
    })

    test('get undefined state', ()=>{
        const state: DeepPartial<TStateSchema> = {};
        expect(getProfileData(state as TStateSchema)).toEqual(undefined)
    })
})