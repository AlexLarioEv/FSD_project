import { screen, fireEvent } from '@testing-library/react';

import {componentRender} from '@/shared/lib/test';

import { TStateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib/helpers';

import { loginActions } from '../../model/slice';
import AuthForm from './AuthForm';

const mockOnSuccess = jest.fn();

const renderComponent = (storeState: DeepPartial<TStateSchema> = { login: { username: '', password: '', isLoading: false, error: '' } }) => {
    
    return componentRender(
        <AuthForm onSuccess={mockOnSuccess} />, {initialState: storeState}
    );
};

describe('AuthForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(loginActions, 'setUsername');
        jest.spyOn(loginActions, 'setPassword');
    });

    test('renders username and password inputs, and sign-in button', () => {
        renderComponent();
        expect(screen.getByLabelText('login')).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign_in/i })).toBeInTheDocument();
    });

    test('dispatches setUsername and setPassword on input change', () => {
        renderComponent();
        const usernameInput = screen.getByLabelText('login');
        const passwordInput = screen.getByLabelText('password');

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        expect(loginActions.setUsername).toHaveBeenCalledWith('testuser');
        expect(loginActions.setPassword).toHaveBeenCalledWith('password');
    });
});
