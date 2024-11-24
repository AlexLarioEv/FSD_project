describe('Пользователь заходит на страницу статей', () => {
    beforeEach(()=> {
        cy.login().then(() => {
            cy.visit('article');
        })
    })
    
    it('Статья успешно подгрузилась', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleList').should('have.length.greaterThan', 3);
    })

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleList').should('have.length.greaterThan', 3);
    })
})