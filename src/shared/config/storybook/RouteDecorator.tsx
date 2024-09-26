import { StoryFn } from '@storybook/react/'
import {BrowserRouter} from 'react-router-dom'

export const RouteDecorator =  (StoreComponent : StoryFn) => {
  return (
    <BrowserRouter>
      <StoreComponent/>
    </BrowserRouter>
  )
}
  