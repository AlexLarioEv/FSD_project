import type { Meta, StoryObj } from '@storybook/react';

import { Card, ECardTheme } from './Card';
import { Text } from '../Text';

const meta = {
    title: 'shared/Card',
    component: Card,
    args: {
        children: (
            <>
                <Text description="content Card" />
                <Text description="content Card" />
                <Text description="content Card" />
                <Text description="content Card" />
            </>
        ),
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
    args: {
        theme: ECardTheme.OUTLINED,
    },
};
