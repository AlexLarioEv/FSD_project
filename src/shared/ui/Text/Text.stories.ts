import type { Meta, StoryObj } from '@storybook/react';

import { Text, ETypeText } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'ABC',
        description: 'Done',
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: ETypeText.PRIMARY,
    },
};

export const Error: Story = {
    args: {
        type: ETypeText.ERROR,
    },
};
