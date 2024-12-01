let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Профиль успешно загружен', () => {
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            'testUser',
        );
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Профиль редактируется', () => {
        const newName = 'new';
        const newLastName = 'lastname';

        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastName,
        );
    });
});
