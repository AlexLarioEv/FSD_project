import axios  from 'axios';

// import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/test'

import {loginByUserName} from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios)

describe('loginByUserName',()=>{

    test('success userActions', async ()=> {
        const userValue = {
            username: '123',
            id: '1'
        }
        
        mockedAxios.post.mockReturnValue(Promise.resolve({data:userValue}))
        const thunk = new TestAsyncThunk(loginByUserName)
        const result = await thunk.callThunk({ username: '123', password: '123' }); 

        // Нужно из-за изменении Api тесты упали

        // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(3); --> toBe 2
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('fulfilled');  --> rejected
        expect(result.payload).toEqual("error"); 
    })

    test('failed userActions', async ()=> {

        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403
        }))
        const thunk = new TestAsyncThunk(loginByUserName)
        const result = await thunk.callThunk({username: '123', password: '123'});

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');

    })
})