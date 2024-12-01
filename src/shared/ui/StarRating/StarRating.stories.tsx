import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta = {
    title: 'shared/StarRating',
    component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
    args: {
        selectedStars: 4,
    },
};

export const Size100: Story = {
    args: {
        size: 100,
    },
};
