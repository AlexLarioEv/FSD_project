import { EErrorValidateForm, TProfile } from '../../types/ProfileSchema';
import { TestAsyncThunk } from '@/shared/lib/test'

import {fetchProfile} from './fetchProfile';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';


const profileData: TProfile = { first: 'Иван',
    lastname: 'Иванов',
    age: 12,
    currency: ECurrency.EUR,
    country: ECountry.ARMENIA,
    city: 'New Your',
    username: 'Ivan',
    avatar: ''
}

describe('fetchProfile',()=>{

    test('success fetchProfile', async ()=> {

        const thunk = new TestAsyncThunk(fetchProfile)
        thunk.api.get.mockReturnValue(Promise.resolve({data: profileData}))
        const result = await thunk.callThunk(); 

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled'); 
        expect(result.payload).toEqual(profileData); 
    })

    test('failed fetchProfile', async ()=> {

        const thunk = new TestAsyncThunk(fetchProfile)
        thunk.api.get.mockReturnValue(Promise.resolve({
            status: 403
        }))
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([EErrorValidateForm.SERVER_ERROR]); 

    })
})