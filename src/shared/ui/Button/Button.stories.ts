import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, EButtonType } from './Button';


const meta = {
  title: 'shared/Button',
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
    theme: EButtonType.CLEAR,
    children: 'Button'
  },
};

export const Border: Story = {
  args:{
    theme: EButtonType.BORDER,
    children: 'Button'
  }
}
