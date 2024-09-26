import { StoryFn } from '@storybook/react/'
import {ThemeProvider} from "app";

export const ThemeProvideDecorator =  (StoreComponent : StoryFn) => {
  return (
    <ThemeProvider>
      <StoreComponent/>
    </ThemeProvider>
  )
}
  