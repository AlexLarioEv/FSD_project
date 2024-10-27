import { render, screen } from "@testing-library/react";
import { ArticleItem } from "./ArticleItem";
import { EArticleView, TArticle } from "../../model/types/ArticleSchema";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { EArticleType,EArticleBlockType } from "../../model/types/ArticleSchema";
import { componentRender } from "@/shared/lib/test";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

const mockNavigate = useNavigate as jest.Mock;

const mockArticle: TArticle = {
    id: "1",
    title: "Test Article",
    img: "test-img.jpg",
    views: 100,
    createdAt: "2024-10-25",
    type: [
        EArticleType.ECONOMICS,
        EArticleType.IT,
        EArticleType.SCIENCE,
    ],
    user: { username: "AuthorName", avatar: "author-avatar.jpg", id: '1' },
    blocks: [
        {
            id: "1",
            type: EArticleBlockType.TEXT,
            title: "Introduction",
            paragraphs: ["This is a test paragraph for the article block."],
        },
    ],
    subtitle: "subtitle"
};

describe("ArticleItem Component", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test("renders loading state", () => {
        componentRender(
            <ArticleItem article={mockArticle} view={EArticleView.BIG} isLoading />
        );
        expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
    });

    test("renders in BIG view with title, views, and description", () => {
        render(
            <BrowserRouter>
                <ArticleItem article={mockArticle} view={EArticleView.BIG} isLoading={false} />
            </BrowserRouter>
        );

        expect(screen.getByText("Test Article")).toBeInTheDocument();
        expect(screen.getByText("2024-10-25")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
        expect(screen.getByText("AuthorName")).toBeInTheDocument();
        expect(screen.getByAltText("AuthorName")).toHaveAttribute("src", "author-avatar.jpg");
        expect(screen.getByText("Introduction")).toBeInTheDocument();
    });

    test("renders in SMALL view with title and views only", () => {
        componentRender(
            <ArticleItem article={mockArticle} view={EArticleView.SMALL} isLoading={false} />
        );

        expect(screen.getByText("Test Article")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
        expect(screen.getByText("2024-10-25")).toBeInTheDocument();
        expect(screen.queryByText("Introduction")).not.toBeInTheDocument();
    });
});