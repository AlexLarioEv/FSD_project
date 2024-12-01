/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from './HStack';

const content = (
    <>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
    </>
);

const meta = {
    title: 'shared/HStack',
    component: HStack,
    args: {
        children: content,
    },
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HStack4: Story = {
    args: {
        gap: 4,
    },
};

export const HStack8: Story = {
    args: {
        gap: 8,
    },
};

export const HStack16: Story = {
    args: {
        gap: 16,
    },
};

export const HStack32: Story = {
    args: {
        gap: 32,
    },
};
