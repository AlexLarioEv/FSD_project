export const setRate = (
    startCount: number = 5,
    feedback: string = 'feedback',
) => {
    cy.getByTestId('StarRating.' + startCount).click();
    cy.getByTestId('Rating.Input').type(feedback);
    cy.getByTestId('Rating.Save').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(startCount?: number, feedback?: string): Chainable<void>;
        }
    }
}
