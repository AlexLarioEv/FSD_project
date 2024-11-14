import type { Meta, StoryObj } from '@storybook/react';

import {CommentCardLoading} from './CommentCardLoading';

const meta = {
    title: 'entities/Comment/CommentCardLoading',
    component: CommentCardLoading,

    args:{
        isLoading: true
    }

} satisfies Meta<typeof CommentCardLoading>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
