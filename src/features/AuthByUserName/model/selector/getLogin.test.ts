import {getLogin} from './getLogin'

import { TStateSchema } from '@/shared/config/storeConfig'
import { DeepPartial } from '@/shared/lib/helpers'

describe('getLogin.test', ()=>{
    test('should return getLogin', ()=> {
        const state: DeepPartial<TStateSchema> = {
            login: {username: '10', password: 'ssasda', error: 'Error', isLoading: true}
        }
        expect(getLogin(state as TStateSchema)).toEqual({
            username: '10', 
            password: 'ssasda', 
            error: 'Error', 
            isLoading: true
        })
    })
})
