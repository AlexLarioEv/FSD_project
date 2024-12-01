// TDOD: внедрить alias

import {EditProfile} from '../../src/features/EditProfile';
import {TestProvider} from '../../src/shared/lib/test/componentRender/componentRender'

const ID_USER = '1'

describe('EditProfile.tsx.cy.tsx', () => {
    it('playground', () => {
        cy.intercept( 'GET', '**/profile/*', { fixture: 'profile.json'})
        cy.mount(
            <TestProvider options={{initialState:{user:{auth: {id:ID_USER}}}}}>
                <EditProfile id={ID_USER}/>
            </TestProvider>
        )
    })
})