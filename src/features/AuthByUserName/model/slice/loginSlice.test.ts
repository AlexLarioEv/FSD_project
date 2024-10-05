import { DeepPartial } from '@/shared/lib/helpers';

import {loginReducer, loginActions} from './loginSlice'
import { TLoginSchema } from '../types';

describe('loginSlice.test', ()=>{
    test('set username', ()=> {
        const state: DeepPartial<TLoginSchema> = { username: '123'};
        expect(loginReducer(state, loginActions.setUsername('12341231'))).toEqual({username: '12341231' });
    });

    test('set password', ()=> {
        const state: DeepPartial<TLoginSchema> = { password: '121'};
        expect(loginReducer(state, loginActions.setPassword('111'))).toEqual({password: '111' });
    });

    test('state undefined', ()=> {
        expect(loginReducer(undefined, loginActions.setUsername('111'))).toEqual({username: '111' });
    });
});
