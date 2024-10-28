import {  screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import { componentRender } from "@/shared/lib/test";

import { EArticleType,EArticleBlockType } from "../../model/types/ArticleSchema";
import { EArticleView, TArticle } from "../../model/types/ArticleSchema";
import { ArticleItem } from "./ArticleItem";

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


    test("renders in BIG view with title, views, and description", () => {
        componentRender(
            <ArticleItem article={mockArticle} view={EArticleView.BIG} />
        );

        expect(screen.getByText("Test Article")).toBeInTheDocument();
        expect(screen.getByText("2024-10-25")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
        expect(screen.getByText("AuthorName")).toBeInTheDocument();
        expect(screen.getByAltText("AuthorName")).toHaveAttribute("src", "author-avatar.jpg");
        expect(screen.getByText("Introduction")).toBeInTheDocument();
    });
});