import {screen} from '@testing-library/react';
import {componentRender} from '@/shared/lib/test';

import  SelectCountry  from './SelectCountry';
import { ECountry } from '../../model/types';

describe('SelectCountry', ()=> {

    test('SelectCountry defaultValue', ()=> {
        componentRender(<SelectCountry defaultValue={ECountry.ARMENIA} />);
        expect(screen.getByTestId("selectCountry")).toHaveTextContent(ECountry.ARMENIA);
    })
})