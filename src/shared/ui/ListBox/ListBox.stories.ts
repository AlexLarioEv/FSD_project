import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';


const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    args: {
        items: [
            {value: '1', content: 'Wolf1'},
            {value: '2', content: 'Wolf2'},
            {value: '3', content: 'Wolf3'}
        ],
        defaultValue: 'Asw',
        onChange: () => {}
    }

} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
