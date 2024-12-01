import type { Meta, StoryObj } from '@storybook/react';

import SelectCurrency from './SelectCurrency';
import { fn } from '@storybook/test';
import { ECurrency } from '../../model/types';

const meta = {
    title: 'entities/SelectCurrency',
    component: SelectCurrency,

    args: {
        onChange: fn(),
    },
} satisfies Meta<typeof SelectCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultRUB: Story = {
    args: {
        value: ECurrency.EUR,
    },
};
