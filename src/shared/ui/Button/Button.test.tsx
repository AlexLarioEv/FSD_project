import { screen } from '@testing-library/react';
import { Button, EButtonTheme } from './Button';
import { componentRender } from '@/shared/lib/test';

describe('classNames', () => {
    test('Button render', () => {
        componentRender(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with Button clear theme', () => {
        componentRender(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
