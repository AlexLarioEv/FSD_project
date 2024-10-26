import { TStateSchema } from '@/app/providers/StoreProvider';

import { getUser, isAuth, isInit, getAuthData } from './getUser';
import { DeepPartial } from '@/shared/lib/helpers';

const stateArticle: DeepPartial<TStateSchema> = {
    user: {
        auth: {
            id: '1',
            username: 'Wolf',
            avatar: 'avatar',
        },
        _init: true,
    }
}

describe('test selector user', () => {

    test('getUser', () => {
        expect(getUser(stateArticle as TStateSchema)).toEqual(stateArticle.user)
    })

    test('isAuth', () => {
        expect(isAuth(stateArticle as TStateSchema)).toEqual(true)
    })

    test('isInit', () => {
        expect(isInit(stateArticle as TStateSchema)).toEqual(stateArticle.user?._init)
    })

    test('getAuthData', () => {
        expect(getAuthData(stateArticle as TStateSchema)).toEqual(stateArticle.user?.auth)
    })
})