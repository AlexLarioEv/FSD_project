import type { Meta, StoryObj } from '@storybook/react';

import {CommentCard} from './CommentCard';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,

    args:{
        comment: {
            id: '1',
            text: 'comment',
            user: {
                id:'1',
                avatar: '',
                username: 'Заяц'
            }
        }
    }

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
