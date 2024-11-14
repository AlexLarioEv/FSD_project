import { componentRender } from '@/shared/lib/test';
import { AppRouter } from './AppRouter';
import { getRouteAbout, getRouteMain } from '@/shared/config/routeConfig';
import { screen } from '@testing-library/dom';

describe("AppRouter", () => {

    test("PageMain", async ()=> {
        componentRender(<AppRouter />, {route: getRouteMain()})
        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument()
    })

    test("PageAbout", async ()=> {
        componentRender(<AppRouter />, {route: getRouteAbout()})
        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument()
    })

    test("NotFundPage", async ()=> {
        componentRender(<AppRouter />, {route:"/dsasdas"})
        const page = await screen.findByTestId('NotFundPage');

        expect(page).toBeInTheDocument()
    })
})