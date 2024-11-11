import type { Preview } from "@storybook/react";
import {ThemeDecorator,globalTypes} from '../../src/shared/config/storybook/ThemeDecorator'
import {StoreAndRouteDecorator} from '../../src/shared/config/storybook/StoreDecorator'
import '../../src/app/styles/index.scss';

const preview: Preview = {
    decorators: [ThemeDecorator, StoreAndRouteDecorator],
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

