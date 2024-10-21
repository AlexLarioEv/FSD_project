import { TestAsyncThunk } from '@/shared/lib/test'

import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

import {updateProfile} from './updateProfile';
import { EErrorValidateForm, TProfile } from '../../types/ProfileSchema';

const profileData: TProfile = { 
    id: '1',
    first: 'Иван',
    lastname: 'Иванов',
    age: 12,
    currency: ECurrency.EUR,
    country: ECountry.ARMENIA,
    city: 'New Your',
    username: 'Ivan',
    avatar: ''
}

describe('updateProfile',()=>{

    test('success updateProfile', async ()=> {
        const thunk = new TestAsyncThunk(updateProfile, {
            profile: {
                form: profileData,
            },
        });
        
        thunk.api.put.mockReturnValue(Promise.resolve({data: profileData}))
       
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled'); 
        expect(result.payload).toEqual(profileData); 
    })

    test('failed updateProfile', async ()=> {

        const thunk = new TestAsyncThunk(updateProfile, {
            profile: {
                form: profileData,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({
            status: 403
        }))
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EErrorValidateForm.SERVER_ERROR,
        ]);
    })
})