import type { Preview } from "@storybook/react";
import {RouteDecorator} from '../../src/shared/config/storybook/RouteDecorator'
import {ThemeProvideDecorator} from '../../src/shared/config/storybook/ThemeProviderDecorator'

import '../../src/app/styles/index.scss';

const preview: Preview = {
  decorators: [RouteDecorator,ThemeProvideDecorator, (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
  ],
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

