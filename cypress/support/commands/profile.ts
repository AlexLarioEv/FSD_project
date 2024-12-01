export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditProfileHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditProfileHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'sdaas' },
        body: {
            id: '4',
            first: 'testUser',
            lastname: 'testUser',
            age: 42,
            currency: 'USD',
            country: 'Armenia',
            city: 'Moscow',
            username: 'testUser',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lgamUiRV0x2yku27YBxm6Vl1KdlZZVZWqg&s',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
