import type { Meta, StoryObj } from '@storybook/react';

import {ArticleCodeBlock} from './ArticleCodeBlock';


const meta = {
    title: 'entities/Article/ArticleCodeBlock',
    component: ArticleCodeBlock,

    args:{
        code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    }

} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
