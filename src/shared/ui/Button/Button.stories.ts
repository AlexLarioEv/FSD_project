import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, EButtonTheme } from './Button';
import { ETheme } from '@/shared/contexts';


const meta = {
    title: '@/shared/Button',
    component: Button,
    parameters: {

        layout: 'centered',
    },


    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        children: 'Button'
    },
};

export const Clear: Story = {
    args: {
        theme: EButtonTheme.CLEAR,
        children: 'Button'
    },
};

export const ClearDark: Story = {
    args: {
        theme: EButtonTheme.CLEAR,
        children: 'Button'
    },
    parameters: {
        theme: ETheme.DARK
    }
};

export const Border: Story = {
    args:{
        theme: EButtonTheme.BORDER,
        children: 'Button'
    }
}

export const BorderDark: Story = {
    args: {
        theme: EButtonTheme.BORDER,
        children: 'Button'
    },
    parameters: {
        theme: ETheme.DARK
    }
};