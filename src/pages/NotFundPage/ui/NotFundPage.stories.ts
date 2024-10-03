import type { Meta, StoryObj } from '@storybook/react';

import {NotFundPage} from './NotFundPage';


const meta = {
    title: 'pages/NotFundPage',
    component: NotFundPage,

} satisfies Meta<typeof NotFundPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
