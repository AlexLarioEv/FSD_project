/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const content = (
    <>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
    </>
);

const meta = {
    title: 'shared/VStack',
    component: VStack,
    args: {
        children: content,
    },
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VStack4: Story = {
    args: {
        gap: 4,
    },
};

export const VStack8: Story = {
    args: {
        gap: 8,
    },
};

export const VStack16: Story = {
    args: {
        gap: 16,
    },
};

export const VStack32: Story = {
    args: {
        gap: 32,
    },
};
