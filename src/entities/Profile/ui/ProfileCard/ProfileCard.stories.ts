import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {

        layout: 'centered',

    },

    args:{
        onChangeAge: fn(),
        onChangeLastname: fn(),
        onChangeAvatar: fn(),
        onChangeCity: fn(),
        onChangeCountry: fn(),
        onChangeCurrency: fn(),
        onChangeFirstname: fn(),
        onChangeUsername: fn(),
    }

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};

export const Loading: Story = {
    args:{
        isLoading: true
    }
};

export const Error: Story = {
    args:{
        error: true
    }
}

export const Readonly: Story = {
    args:{
        readonly: true
    }
}
