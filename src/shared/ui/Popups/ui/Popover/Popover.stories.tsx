import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Text } from '../../../Text';
import { Card } from '../../../Card';


const meta = {
    title: 'shared/Popups/Popover',
    component: Popover,
    args: {
        trigger: <Text description='Open Popover'/>,
        children: (
            <>
                <Card><Text description='content Popover'/></Card>
                <Card><Text description='content Popover'/></Card>
                <Card><Text description='content Popover'/></Card>
                <Card><Text description='content Popover'/></Card>
            </>
        )
    }

} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
