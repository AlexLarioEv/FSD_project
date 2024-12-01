import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/test';

import { Text, ETypeText } from './Text';

describe('classNames', () => {
    test('Text render', () => {
        componentRender(<Text title="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with Text primary type', () => {
        componentRender(
            <Text title="Test" type={ETypeText.PRIMARY} testId="text" />,
        );
        const textComponent = screen.getByTestId('text');
        expect(textComponent).toHaveClass('primary');
    });

    test('with Text error type', () => {
        componentRender(
            <Text title="Test" type={ETypeText.ERROR} testId="text" />,
        );
        const textComponent = screen.getByTestId('text');
        expect(textComponent).toHaveClass('error');
    });
});
