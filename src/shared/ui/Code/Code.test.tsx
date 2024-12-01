import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from '@/shared/lib/test';
import { Code } from './Code';

Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn(),
    },
});

describe('Code Component', () => {
    const sampleCode = "console.log('Hello, world!');";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders with provided code', () => {
        componentRender(<Code code={sampleCode} />);
        const codeElement = screen.getByText(sampleCode);
        expect(codeElement).toBeInTheDocument();
    });

    test('renders copy button', () => {
        componentRender(<Code code={sampleCode} />);
        const copyButton = screen.getByRole('button');
        expect(copyButton).toBeInTheDocument();
    });

    test('copies code to clipboard on copy button click', () => {
        componentRender(<Code code={sampleCode} />);
        const copyButton = screen.getByRole('button');

        fireEvent.click(copyButton);

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(sampleCode);
    });
});
