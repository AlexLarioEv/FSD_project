import { Decorator } from '@storybook/react/'
import {BrowserRouter} from 'react-router-dom'

export const RouteDecorator: Decorator =  (StoreComponent) => {

    return (
        <BrowserRouter>
            <StoreComponent/>
        </BrowserRouter>
    )
}
  