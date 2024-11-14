import type { Meta, StoryObj } from '@storybook/react';

import NotificationList from './NotificationList';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,

} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
