export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';

export { articleReducer, articleActions } from './model/slice/articleSlice';
export { getArticleData } from './model/selector/getArticle';
export {
    EArticleView,
    EArticleBlockType,
    EArticleType,
} from './model/types/ArticleSchema';

export type {
    TArticleSchema,
    TArticle,
    TArticleKey,
} from './model/types/ArticleSchema';
