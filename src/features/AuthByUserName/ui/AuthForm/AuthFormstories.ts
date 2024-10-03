import type { Meta, StoryObj } from '@storybook/react';

import {AuthForm} from './AuthForm';


const meta = {
    title: 'features/AuthForm',
    component: AuthForm,

} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
