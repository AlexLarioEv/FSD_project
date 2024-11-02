import {screen} from '@testing-library/react';
import {componentRender} from '@/shared/lib/test';

import SelectCurrency  from './SelectCurrency';
import { ECurrency } from '../../model/types';

describe('SelectCurrency', ()=> {

    test('SelectCurrency defaultValue', ()=> {
        componentRender(<SelectCurrency defaultValue={ECurrency.RUB} />);
        expect(screen.getByTestId("selectCurrency")).toHaveTextContent(ECurrency.RUB);
    })
})