import { userReducer, userActions } from './userSlice';
import { TUser, TUserSchema } from '../types';
import { ELocalStorageKey } from '@/shared/const';

describe('userSlice', () => {
    const initialState: TUserSchema= { _init: false };

    describe('setAuthData', () => {
        it('should set auth data in the state', () => {
            const user: TUser = { id: '1', username: 'wolf' }; // Adjust fields to match your TUser type
            const action = userActions.setAuthData(user);
            const newState = userReducer(initialState, action);

            expect(newState.auth).toEqual(user);
        });
    });

    describe('initAuthData', () => {
        beforeEach(() => {
            localStorage.clear();
        });

        test('should initialize auth data from local storage if present', () => {
            const user: TUser = { id: '1', username: 'wolf' }; // Adjust fields to match your TUser type
            localStorage.setItem(ELocalStorageKey.USER, JSON.stringify(user));

            const action = userActions.initAuthData();
            const newState = userReducer(initialState, action);

            expect(newState.auth).toEqual(user);
            expect(newState._init).toBe(true);
        });

        test('should set _init to true even if no user data in local storage', () => {
            const action = userActions.initAuthData();
            const newState = userReducer(initialState, action);

            expect(newState.auth).toBeUndefined();
            expect(newState._init).toBe(true);
        });
    });

    describe('logout', () => {
        test('should remove auth data from state and clear local storage', () => {
            const stateWithUser = { ...initialState, auth: { id: '1', username: 'wolf' } }; // Replace with actual fields
            localStorage.setItem(ELocalStorageKey.USER, JSON.stringify(stateWithUser.auth));

            const action = userActions.logout();
            const newState = userReducer(stateWithUser, action);

            expect(newState.auth).toBeUndefined();
            expect(localStorage.getItem(ELocalStorageKey.USER)).toBeNull();
        });
    });
});