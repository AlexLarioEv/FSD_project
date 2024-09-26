import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppLink, EApplinkTypes } from './AppLink';


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
};

export const Secondary: Story = {
  args: {
    type: EApplinkTypes.SECONDARY,
    children: 'AppLink'
  },
}
