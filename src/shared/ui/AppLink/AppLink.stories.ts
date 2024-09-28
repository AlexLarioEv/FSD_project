import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppLink, EApplinkTypes } from './AppLink';
// import theme from 'config/storybook/theme';
import { ETheme } from 'shared/contexts';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {

        layout: 'centered',
    },


    args: { onClick: fn(), to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        children: 'AppLink'
    },
};

export const Primary: Story = {
    args: {
        type: EApplinkTypes.PRIMARY,
        children: 'AppLink'
    },
    parameters: {
        theme: ETheme.DARK
    }
};

export const Secondary: Story = {
    args: {
        type: EApplinkTypes.SECONDARY,
        children: 'AppLink'
    },
}