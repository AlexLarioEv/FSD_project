import type { Meta, StoryObj } from '@storybook/react';

import avatar from '@/shared/assets/icons/avatar.jpg'
import {ArticleImageBlock} from './ArticleImageBlock';


const meta = {
    title: 'entities/ArticleImageBlock',
    component: ArticleImageBlock,

    args:{
        title: 'Заяц',
        src: avatar
    }

} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
