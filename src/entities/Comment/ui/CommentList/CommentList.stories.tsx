import type { Meta, StoryObj } from '@storybook/react';

import {CommentList} from './CommentList';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,

    args:{
        comments: [{
            id: '1',
            text: 'comment',
            user: {
                id:'1',
                avatar: '',
                username: 'Заяц'
            },
        },{
            id: '2',
            text: 'comment',
            user: {
                id:'2',
                avatar: '',
                username: 'Волк'
            },
        }]
    }

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};
