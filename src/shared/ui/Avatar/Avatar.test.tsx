import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/test";

import { Avatar } from "./Avatar";
describe("Avatar Component", () => {

    test("renders with default props", () => {
        componentRender(<Avatar />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveStyle({ width: "40px", height: "40px" });
    });

    test("renders with custom size", () => {
        componentRender(<Avatar size={60} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveStyle({ width: "60px", height: "60px" });
    });

    test("applies custom className", () => {
        componentRender(<Avatar className="customClass" />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveClass("customClass");
    });

    test("renders with custom src", () => {
        const customSrc = "https://example.com/custom-avatar.jpg";
        componentRender(<Avatar src={customSrc} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toHaveAttribute("src", customSrc);
    });

    test("renders with custom alt text", () => {
        const customAlt = "User Avatar";
        componentRender(<Avatar alt={customAlt} />);
        const avatarElement = screen.getByTestId("avatar");
        expect(avatarElement).toBeInTheDocument();
    });
});
