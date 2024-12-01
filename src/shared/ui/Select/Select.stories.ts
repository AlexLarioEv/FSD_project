import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },

    args: {
        label: 'Герой',
        options: [
            { value: 'Заяц', content: 'Заяц' },
            { value: 'Волк', content: 'Волк' },
        ],
        onChange: fn(),
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultValue: Story = {
    args: {
        defaultValue: 'Заяц',
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
    },
};
