/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppLink, EApplinkTypes } from "./AppLink";

const setup = (props = {}) => render(
    <BrowserRouter>
        <AppLink to="/" {...props}>Test Link</AppLink>
    </BrowserRouter>
);

describe("AppLink Component", () => {

    test("renders with default type (primary)", () => {
        setup();
        const linkElement = screen.getByRole("link", { name: /Test Link/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass("AppLink", "primary");
    });

    test("applies primary style when type is PRIMARY", () => {
        setup({ type: EApplinkTypes.PRIMARY });
        const linkElement = screen.getByRole("link", { name: /Test Link/i });
        expect(linkElement).toHaveClass("primary");
    });

    test("applies secondary style when type is SECONDARY", () => {
        setup({ type: EApplinkTypes.SECONDARY });
        const linkElement = screen.getByRole("link", { name: /Test Link/i });
        expect(linkElement).toHaveClass("secondary");
    });

    test("renders with additional class name when provided", () => {
        setup({ className: "customClass" });
        const linkElement = screen.getByRole("link", { name: /Test Link/i });
        expect(linkElement).toHaveClass("customClass");
    });

    test("renders correct link path", () => {
        setup({ to: "/test-path" });
        const linkElement = screen.getByRole("link", { name: /Test Link/i });
        expect(linkElement).toHaveAttribute("href", "/test-path");
    });
});