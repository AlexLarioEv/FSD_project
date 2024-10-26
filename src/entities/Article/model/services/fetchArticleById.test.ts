import { TestAsyncThunk } from "@/shared/lib/test"

import { fetchArticleById } from './fetchArticleById';
import { EArticleBlockType, EArticleType, TArticle } from "../types/ArticleSchema";

const articleData: TArticle = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.ECONOMICS],
    blocks: [{
        type: EArticleBlockType.CODE, 
        code: 'sda',
        id: '1'
    }],
}

describe('fetchArticleById',() => {
    const articleId = '1';
    
    test('fetchArticleById success', async ()=> {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({data: articleData}));
        const result = await thunk.callThunk(articleId);

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleData);
    })

    test('fetchArticleById failed', async ()=> {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk(articleId);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Error');
    })

})