import {Counter} from './Counter'

import {fireEvent, screen} from '@testing-library/react'
import { TStateShema } from 'app/providers/StoreProvider/config/types'
import { DeepPartial } from 'shared/lib/helpers'
import {componentRender} from 'shared/lib/test'

describe('Counter', ()=> {
    const state: DeepPartial<TStateShema> = {counter: {value: 5}}

    test('Counter render', ()=> {
        componentRender(<Counter />,{initialState: state});
        expect(screen.getByTestId("counter")).toHaveTextContent('5');
    })

    test('Counter incremented', ()=> {
        componentRender(<Counter />, {initialState: state});
        const toggleIncrement = screen.getByTestId("increment")
        fireEvent.click(toggleIncrement);
        expect(screen.getByTestId("counter")).toHaveTextContent('6');
    })

    test('Counter decremented', ()=> {
        componentRender(<Counter />, {initialState: state});
        const toggleDecrement = screen.getByTestId("decrement")
        fireEvent.click(toggleDecrement);
        expect(screen.getByTestId("counter")).toHaveTextContent('4');
    })
})