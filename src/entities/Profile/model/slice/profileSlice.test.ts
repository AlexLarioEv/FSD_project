import {profileActions, profileReducer} from './profileSlice';
import { TProfileSchema } from '../types/ProfileSchema';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

const data = {
    id: "1",
    first: "Иван",
    lastname: "Иванов",
    age: 42,
    currency: ECurrency.EUR,
    country: ECountry.KAZAKHSTAN,
    city: "Moscow",
    username: "admin",
    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
}

describe('profileSlice', ()=>{
    const state: TProfileSchema = {
        data,
        isLoading: false,
        readonly: true
    };

    test('cancelEdit', ()=> {
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({...state, form: state.data, readonly: true});
    });

    test('setReadOnly', ()=> {
        expect(profileReducer(state, profileActions.setReadOnly(false))).toEqual({...state, readonly: false});
    });

    test('state updateProfile', ()=> {
        

        expect(profileReducer(state, profileActions.updateProfile({...data, first: 'Заяц'}))).toEqual({...state, form: {...data, first: 'Заяц'}});
    });
});
