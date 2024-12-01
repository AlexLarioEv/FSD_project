import { TArticle } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Kotlin news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: TArticle) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { authorization: 'sdaas' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/` + articleId,
        headers: { authorization: 'sdaas' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: TArticle): Chainable<TArticle>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
