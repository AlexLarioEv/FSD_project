import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {

        layout: 'centered',
    },

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
