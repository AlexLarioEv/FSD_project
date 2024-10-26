import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

const MockSvg = () => <svg data-testid="mock-svg" />;

describe("Icon Component", () => {
    test("renders the provided SVG component", () => {
        render(<Icon Svg={MockSvg} />);
        const svgElement = screen.getByTestId("mock-svg");
        expect(svgElement).toBeInTheDocument();
    });
});
