import { screen, fireEvent } from '@testing-library/react';
import i18n from '@/shared/config/i18';
import { componentRender } from '@/shared/lib/test';

import { ECountry } from '../../model/types';
import SelectCountry, {TSelectCountryProps} from './SelectCountry';

describe('SelectCountry component', () => {
    const mockOnChange = jest.fn();

    const componentRenderWithProps = (props: TSelectCountryProps = {}) => {
        return componentRender(
            <SelectCountry
                onChange={mockOnChange}
                {...props}
            />
        );
    };

    test('renders without crashing', () => {
        componentRenderWithProps();
        expect(screen.getByTestId('selectCountry')).toBeInTheDocument();
    });

    test('displays default label', () => {
        componentRenderWithProps();
        expect(screen.getByText(i18n.t('enter_country'))).toBeInTheDocument();
    });

    test('calls onChange when an option is selected', () => {
        componentRenderWithProps({ onChange: mockOnChange});
        
        const listBox = screen.getByTestId('selectCountry');
        
        fireEvent.click(listBox);

        const option = screen.getByText(ECountry.ARMENIA);

        fireEvent.click(option);

        expect(mockOnChange).toHaveBeenCalledWith(ECountry.ARMENIA);
    });

    test('does not call onChange when readonly is true', () => {
        componentRenderWithProps({ readonly: true, value: ECountry.ARMENIA, onChange: mockOnChange });
        
        const listBox = screen.getByTestId('selectCountry');
        fireEvent.click(listBox);

        const option = screen.getByText(ECountry.ARMENIA);
        fireEvent.click(option);

        expect(mockOnChange).not.toHaveBeenCalled();
    });
});