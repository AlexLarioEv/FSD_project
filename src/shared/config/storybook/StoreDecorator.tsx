import { Decorator } from '@storybook/react/'
import {StoreProvider} from '@/app/providers/StoreProvider'

export const StoreDecorator: Decorator = (StoreComponent) => {
    return (
        <StoreProvider>
            <StoreComponent/>
        </StoreProvider>
    )
}
  