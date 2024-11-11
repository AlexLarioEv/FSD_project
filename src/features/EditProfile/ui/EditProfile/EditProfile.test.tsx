import { screen } from '@testing-library/react';
import { componentRender, TRenderOptions } from '@/shared/lib/test';
import { TProfile } from '@/entities/Profile';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import userEvent from '@testing-library/user-event';
import { api } from '@/shared/api/api';
import { profileReducer } from '@/entities/Profile/testing';

import { EditProfile } from './EditProfile';

const profile: TProfile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: ECurrency.USD,
    country: ECountry.KAZAKHSTAN,
    city: 'Moscow',
    username: 'admin213',
    avatar: ''
};

const options: TRenderOptions = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false
        },
        user: {
            auth: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditProfile', () => {
    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditProfile id="1" />, options);
        await userEvent.click(screen.getByTestId('EditProfileHeader.EditButton'));
        expect(screen.getByTestId('EditProfileHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditProfile id="1" />, options);
        await userEvent.click(screen.getByTestId('EditProfileHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditProfileHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn(api, 'put');
        componentRender(<EditProfile id="1" />, options);
        await userEvent.click(screen.getByTestId('EditProfileHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        await userEvent.click(screen.getByTestId('EditProfileHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
