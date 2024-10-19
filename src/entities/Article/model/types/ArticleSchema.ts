export enum EArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: EArticleBlockType;
}

export interface IArticleCodeBlock extends ArticleBlockBase {
    type: EArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends ArticleBlockBase {
    type: EArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface IArticleTextBlock extends ArticleBlockBase {
    type: EArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum EArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface TArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: EArticleType[];
    blocks: ArticleBlock[];
}


export type TArticleSchema = {
    isLoading: boolean;
    error?: string;
    data?: TArticle;
}