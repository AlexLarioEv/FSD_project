import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

import Eye from '@/shared/assets/icons/eye-20-20.svg'

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {

        layout: 'centered',
    },

    args: { Svg: Eye },

} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
