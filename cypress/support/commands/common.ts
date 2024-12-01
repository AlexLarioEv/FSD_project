import { ELocalStorageKey } from '../../../src/shared/const';
import { TUser } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
    username: string = 'testUser',
    password: string = '123',
) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            grant_type: 'password',
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(
            ELocalStorageKey.USER,
            JSON.stringify(body),
        );

        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<TUser>;
            getByTestId(testId: string): ReturnType<typeof cy.get>;
        }
    }
}
