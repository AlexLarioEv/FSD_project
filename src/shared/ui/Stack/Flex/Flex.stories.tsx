/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from './Flex'

const content = (
    <>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
    </>
)

const meta = {
    title: 'shared/Flex',
    component: Flex,
    args: {
        children: content
    }
    
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Row4: Story = {
    args:{
        gap: 4
    }
};

export const Row8: Story = {
    args:{
        gap: 8
    }
};

export const Row16: Story = {
    args:{
        gap: 16
    }
};

export const Row32: Story = {
    args:{
        gap: 32
    }
};

export const Column32: Story = {
    args:{
        direction: 'column',
        gap: 32
    }
};
