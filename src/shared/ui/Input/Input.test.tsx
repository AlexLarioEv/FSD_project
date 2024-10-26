import { screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { componentRender } from "@/shared/lib/test";

describe("Input Component", () => {
    test("renders with default props", () => {
        componentRender(<Input />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue("");
    });

    test("displays placeholder text", () => {
        const placeholderText = "Enter text";
        componentRender(<Input placeholder={placeholderText} />);
        const placeholderElement = screen.getByText(`${placeholderText}>`);
        expect(placeholderElement).toBeInTheDocument();
    });

    test("focuses input on click and shows caret", () => {
        componentRender(<Input />);
        const inputElement = screen.getByRole("textbox");

        fireEvent.focus(inputElement);

        const caretElement = screen.getByTestId("caret");
        expect(caretElement).toBeInTheDocument();
    });

    test("calls onChange and updates value correctly", () => {
        const handleChange = jest.fn();
        componentRender(<Input onChange={handleChange} />);
        const inputElement = screen.getByRole("textbox");

        fireEvent.change(inputElement, { target: { value: "Hello" } });
        expect(handleChange).toHaveBeenCalledWith("Hello");
        expect(inputElement).toHaveValue("Hello");
    });

    test("updates caret position on input", () => {
        componentRender(<Input />);
        const inputElement = screen.getByRole("textbox");

        fireEvent.change(inputElement, { target: { value: "Hello" } });
        fireEvent.select(inputElement);

        const caretElement = screen.getByTestId("caret");
        expect(caretElement).toHaveStyle({ left: "45px" });
    });

    test("handles autofocus prop", () => {
        componentRender(<Input data-testid="input" autofocus />);
        const inputElement = screen.getByTestId("input");

        fireEvent.focus(inputElement);  // manually focus

        expect(inputElement).toHaveFocus();
    });
});