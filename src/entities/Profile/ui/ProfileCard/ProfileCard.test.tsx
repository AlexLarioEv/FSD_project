import { componentRender } from '@/shared/lib/test';
import { fireEvent, screen } from '@testing-library/react';

import { ProfileCard, TProfileCardProps } from './ProfileCard';

const renderComponent = (props: Partial<TProfileCardProps> = {}) => {
    return componentRender(<ProfileCard {...props} />);
};

describe('ProfileCard', () => {
    test('renders loading state correctly', () => {
        renderComponent({ isLoading: true });
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test('renders error message when error occurs', () => {
        renderComponent({ error: true });
        expect(
            screen.getByText(/Произошла ошибка при загрузке профиля/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Попробуйте обновить страницу/i),
        ).toBeInTheDocument();
    });

    test('renders profile information when data is provided', () => {
        renderComponent({
            first: 'John',
            lastname: 'Doe',
            age: 30,
            city: 'New York',
            username: 'johndoe',
            avatar: 'avatar_url',
        });

        expect(screen.getByLabelText('firstName')).toHaveValue('John');
        expect(screen.getByLabelText('lastName')).toHaveValue('Doe');
        expect(screen.getByLabelText('age')).toHaveValue('30');
        expect(screen.getByLabelText('city')).toHaveValue('New York');
        expect(screen.getByLabelText('username')).toHaveValue('johndoe');
        expect(screen.getByLabelText('avatar')).toHaveValue('avatar_url');
    });

    test('disables inputs when readonly is true', () => {
        renderComponent({
            readonly: true,
            first: 'John',
            lastname: 'Doe',
            age: 30,
            city: 'New York',
            username: 'johndoe',
        });

        expect(screen.getByLabelText('firstName')).toBeDisabled();
        expect(screen.getByLabelText('lastName')).toBeDisabled();
        expect(screen.getByLabelText('age')).toBeDisabled();
        expect(screen.getByLabelText('city')).toBeDisabled();
        expect(screen.getByLabelText('username')).toBeDisabled();
    });

    test('calls onChange functions when inputs are modified', () => {
        const onChangeFirstname = jest.fn();
        const onChangeLastname = jest.fn();
        const onChangeAge = jest.fn();
        const onChangeCity = jest.fn();
        const onChangeUsername = jest.fn();

        renderComponent({
            onChangeFirstname,
            onChangeLastname,
            onChangeAge,
            onChangeCity,
            onChangeUsername,
        });

        fireEvent.change(screen.getByLabelText('firstName'), {
            target: { value: 'Jane' },
        });
        fireEvent.change(screen.getByLabelText('lastName'), {
            target: { value: 'Smith' },
        });
        fireEvent.change(screen.getByLabelText('age'), {
            target: { value: '25' },
        });
        fireEvent.change(screen.getByLabelText('city'), {
            target: { value: 'Chicago' },
        });
        fireEvent.change(screen.getByLabelText('username'), {
            target: { value: 'janesmith' },
        });

        expect(onChangeFirstname).toHaveBeenCalledWith('Jane');
        expect(onChangeLastname).toHaveBeenCalledWith('Smith');
        expect(onChangeAge).toHaveBeenCalledWith('25');
        expect(onChangeCity).toHaveBeenCalledWith('Chicago');
        expect(onChangeUsername).toHaveBeenCalledWith('janesmith');
    });
});
