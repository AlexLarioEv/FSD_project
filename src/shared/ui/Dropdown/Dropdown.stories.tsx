/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import {Dropdown} from './Dropdown';


const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,

    args: {
        items: [
            <div key={1}>first</div>, 
            <div key={2}>second</div>, 
            <div key={3}>third</div>
        ],
        label: 'Open'
    },

    decorators:[(Story)=> <div style={{padding: 100}}><Story/></div>]
    
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
