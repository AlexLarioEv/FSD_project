import { selectByTestId } from "../../helpers/selectByTestId";

describe('Роутинг', () => {
    
    describe('Пользователь НЕ авторизован', ()=> {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
            cy.get('.src-widgets-Navbar-ui-NavBar-module__auth').click();            
        })

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('MainPage')).should('exist')
        })

        it('Переход на несуществующую страницу', () => {
            cy.visit('/sdasdasda')
            cy.get(selectByTestId('NotFundPage')).should('exist')
        })


    });

    describe('Пользователь авторизован', ()=> {
        it('Переход на главную страницу', () => {
            cy.login('admin', '123')

            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
        })

        it('Переход на страницу профиля', () => {
            cy.login('admin', '123')
            
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })

        it('Переход со списком статей', () => {
            cy.login('admin', '123')
            
            cy.visit('/article')
            cy.get(selectByTestId('ArticlePage')).should('exist')
        })
    });


})