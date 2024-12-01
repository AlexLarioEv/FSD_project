import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';
import { fn } from '@storybook/test';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,

    args: {
        onSendComment: fn(),
    },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
