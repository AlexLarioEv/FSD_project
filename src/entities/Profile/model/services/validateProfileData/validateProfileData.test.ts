import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

import {validateProfileData} from './validateProfileData';
import { EErrorValidateForm, TProfile } from '../../types/ProfileSchema';

let profileData: TProfile = { first: 'Иван',
    lastname: 'Иванов',
    age: 12,
    currency: ECurrency.EUR,
    country: ECountry.ARMENIA,
    city: 'New Your',
    username: 'Ivan',
    avatar: 'local'
}

describe('validateProfileData',()=>{
    
    test('not Error validateProfileData', ()=> {

        const errorList = validateProfileData(profileData);

        expect(errorList).toEqual([])
    })

    test('failed validateProfileData', ()=> {
        profileData = {...profileData, lastname: ''}
        const errorList = validateProfileData(profileData);

        expect(errorList).toEqual([
            EErrorValidateForm.FIRST_LAST_NAME_NOT_CORRECT,
        ]);
    })

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            EErrorValidateForm.FIRST_LAST_NAME_NOT_CORRECT,            
            EErrorValidateForm.AGE_NOT_CORRECT,
            EErrorValidateForm.COUNTRY_NOT_CORRECT,
            EErrorValidateForm.CURRENCY_NOT_CORRECT,
        ]);
    });
})