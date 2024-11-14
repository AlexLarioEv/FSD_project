describe('Пользователь заходит на страницу статей', () => {
    beforeEach(()=> {
        cy.login().then(() => {
            cy.visit('article');
        })
    })
    it('passes', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleList').should('have.length.greaterThan', 3);
    })
})