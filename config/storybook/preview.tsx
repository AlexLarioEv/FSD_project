import type { Preview } from "@storybook/react";
import {RouteDecorator} from '../../src/shared/config/storybook/RouteDecorator'
import {ThemeDecorator,globalTypes} from '../../src/shared/config/storybook/ThemeDecorator'
import {StoreDecorator} from '../../src/shared/config/storybook/StoreDecorator'
import '../../src/app/styles/index.scss';

const preview: Preview = {
    decorators: [RouteDecorator,ThemeDecorator,StoreDecorator],
    globalTypes,
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};


export default preview;

