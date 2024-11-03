import { screen, fireEvent } from '@testing-library/react';
import i18n from '@/shared/config/i18';
import { componentRender } from '@/shared/lib/test';

import { ECurrency } from '../../model/types';
import SelectCurrency, {TSelectCurrencyProps} from './SelectCurrency';

describe('SelectCurrency component', () => {
    const mockOnChange = jest.fn();

    const componentRenderWithProps = (props: TSelectCurrencyProps = {}) => {
        return componentRender(
            <SelectCurrency
                onChange={mockOnChange}
                {...props}
            />
        );
    };

    test('renders without crashing', () => {
        componentRenderWithProps();
        expect(screen.getByTestId('selectCurrency')).toBeInTheDocument();
    });

    test('displays default label', () => {
        componentRenderWithProps();
        expect(screen.getByText(i18n.t('enter_currency'))).toBeInTheDocument();
    });

    test('calls onChange when an option is selected', () => {
        componentRenderWithProps({ onChange: mockOnChange});
        
        const listBox = screen.getByTestId('selectCurrency');
        
        fireEvent.click(listBox);


        const option = screen.getByText(ECurrency.RUB);

        fireEvent.click(option);

        expect(mockOnChange).toHaveBeenCalledWith(ECurrency.RUB);
    });

    test('does not call onChange when readonly is true', () => {
        componentRenderWithProps({ readonly: true, value: ECurrency.RUB, onChange: mockOnChange });
        
        const listBox = screen.getByTestId('selectCurrency');
        fireEvent.click(listBox);


        const option = screen.getByText(ECurrency.RUB);
        fireEvent.click(option);

        expect(mockOnChange).not.toHaveBeenCalled();
    });
});