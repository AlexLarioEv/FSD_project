import type { Meta, StoryObj } from '@storybook/react';

import { EditProfile } from './EditProfile';

const meta = {
    title: 'features/EditProfile',
    component: EditProfile,

    args: {
        id: '1',
    },
} satisfies Meta<typeof EditProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
