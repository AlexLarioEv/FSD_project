import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import SelectCountry from './SelectCountry';
import { ECountry } from '../../model/types';

const meta = {
    title: 'entities/SelectCountry',
    component: SelectCountry,

    args: {
        onChange: fn(),
    },
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultRUB: Story = {
    args: {
        value: ECountry.RUSSIA,
    },
};
