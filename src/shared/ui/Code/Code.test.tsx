import { render, screen, fireEvent } from "@testing-library/react";
import { Code } from "./Code";

Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn(),
    },
});

describe("Code Component", () => {
    const sampleCode = "console.log('Hello, world!');";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("renders with provided code", () => {
        render(<Code code={sampleCode} />);
        const codeElement = screen.getByText(sampleCode);
        expect(codeElement).toBeInTheDocument();
    });

    test("renders copy button", () => {
        render(<Code code={sampleCode} />);
        const copyButton = screen.getByRole("button");
        expect(copyButton).toBeInTheDocument();
    });

    test("copies code to clipboard on copy button click", () => {
        render(<Code code={sampleCode} />);
        const copyButton = screen.getByRole("button");

        fireEvent.click(copyButton);

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(sampleCode);
    });
});