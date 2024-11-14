let currentArticleId = '';

describe('Переходит на статью подробнее', () => {

    beforeEach(()=> {
        cy.login()
        cy.createArticle().then((article)=> {
            cy.log(JSON.stringify(article))
            currentArticleId = article.id;
            cy.visit(`article/${currentArticleId}`)
        })
    })
  
    afterEach(()=> {
        cy.removeArticle(currentArticleId);     
    })
    it('Статья отображается', () => {
        cy.getByTestId("ArticleDetails.Info").should('exist');
    })

    it('Оставляет комментарии', () => {
        cy.getByTestId("ArticleDetails.Info").should('exist')
        cy.getByTestId("Article.AddCommentForm").scrollIntoView()
        cy.addComment('text');
        cy.getByTestId('CommentCard').should('have.length', 1)
    })

    //TODO: Исправить тест
    it('Оставляет оценку', () => {
        cy.getByTestId("ArticleDetails.Info").should('exist')
        cy.getByTestId("Rating").scrollIntoView()
        // cy.setRate(5, 'feedback');
        // cy.get("[data-selected=true]").should('have.value', 5)
    })
})