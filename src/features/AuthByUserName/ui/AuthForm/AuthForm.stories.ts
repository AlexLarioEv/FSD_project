import type { Meta, StoryObj } from '@storybook/react';
import { createStateStory } from '@/shared/config/storybook';

import { loginReducer } from '../../model/slice';

import AuthForm from './AuthForm';

const meta = {
    title: 'features/AuthForm',
    component: AuthForm,
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const stateStory = createStateStory(
    {
        login: {
            username: '231231',
        },
    },
    {
        login: loginReducer,
    },
);

export const Default: Story = {
    parameters: stateStory,
};
