import type { Meta, StoryObj } from '@storybook/react';
import avatar  from '@/shared/assets/icons/avatar.jpg'

import { Avatar } from './Avatar';


const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {

        layout: 'centered',
    },


    args: { alt:'', src: avatar },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const Avatar100: Story = {
    args: {
        size: 100
    }
};