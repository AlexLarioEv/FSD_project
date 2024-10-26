import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar Component", () => {

    test("renders with default props", () => {
        render(<Avatar />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveStyle({ width: "40px", height: "40px" });
    });

    test("renders with custom size", () => {
        render(<Avatar size={60} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveStyle({ width: "60px", height: "60px" });
    });

    test("applies custom className", () => {
        render(<Avatar className="customClass" />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveClass("customClass");
    });

    test("renders with custom src", () => {
        const customSrc = "https://example.com/custom-avatar.jpg";
        render(<Avatar src={customSrc} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveAttribute("src", customSrc);
    });

    test("renders with custom alt text", () => {
        const customAlt = "User Avatar";
        render(<Avatar alt={customAlt} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toBeInTheDocument();
    });
});
