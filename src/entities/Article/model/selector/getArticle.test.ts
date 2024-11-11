import { TStateSchema } from '@/shared/config/storeConfig';

import { getArticle, getArticleData, getArticleError, isArticleLoading } from './getArticle';
import { DeepPartial } from '@/shared/lib/helpers';

describe('test selector article', () => {
    const stateArticle: DeepPartial<TStateSchema> = {
        article: {
            isLoading: false,
            error: 'error',
            data: {
                title: 'title',
                img: 'image',
            }
        }
    }

    test('getArticle', () => {
        expect(getArticle(stateArticle as TStateSchema)).toEqual(stateArticle.article)
    })

    test('getArticle undefined', () => {
        expect(getArticle({} as TStateSchema)).toEqual(undefined)
    })

    test('getArticleData', () => {
        expect(getArticleData(stateArticle as TStateSchema)).toEqual(stateArticle.article?.data)
    })

    test('getArticleData undefined', () => {
        expect(getArticleData({} as TStateSchema)).toEqual(undefined)
    })

    test('getArticleError', () => {
        expect(getArticleError(stateArticle as TStateSchema)).toEqual(stateArticle.article?.error)
    })

    test('getArticleError undefined', () => {
        expect(getArticleError({} as TStateSchema)).toEqual(undefined)
    })

    test('isArticleLoading', () => {
        expect(isArticleLoading(stateArticle as TStateSchema)).toEqual(stateArticle.article?.isLoading)
    })

    test('isArticleLoading undefined', () => {
        expect(isArticleLoading({} as TStateSchema)).toEqual(undefined)
    })
})