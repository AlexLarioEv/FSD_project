import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import { render } from "@testing-library/react";
import { MemoryRouter} from 'react-router-dom'

import {RoutePath} from 'shared/config/routeConfig'
import i18nForTest from 'shared/config/i18/i18nForTest'



export const componentRender = (component: ReactNode, route: string = RoutePath.main) => {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>,
        </I18nextProvider>
    )
}