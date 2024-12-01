/* eslint-disable alexlario-plugin/layer-imports */
import { Decorator } from '@storybook/react/';

import { ThemeProvider } from '@/app';
import { ThemeBlock } from './ThemeBlock';
import { ETheme } from '@/shared/contexts';

export const ThemeDecorator: Decorator = (StoreComponent, context) => {
    const theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === 'dark' ? ETheme.DARK : ETheme.LIGHT;

    return (
        <ThemeProvider value={storyTheme}>
            <ThemeBlock>
                <StoreComponent />
            </ThemeBlock>
        </ThemeProvider>
    );
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'dark',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'circlehollow', title: 'light' },
                { value: 'dark', icon: 'circle', title: 'dark' },
            ],
            showName: true,
        },
    },
};
