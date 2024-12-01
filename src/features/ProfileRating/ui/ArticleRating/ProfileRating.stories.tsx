import type { Meta, StoryObj } from '@storybook/react';

import { ProfileRating } from './ProfileRating';

const meta = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    args: {
        id: '1',
    },
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
