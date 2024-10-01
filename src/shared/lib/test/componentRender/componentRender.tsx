import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import { render } from "@testing-library/react";
import { MemoryRouter} from 'react-router-dom'

import {StoreProvider} from '@/app/providers/StoreProvider'
import {RoutePath} from '@/shared/config/routeConfig'
import i18nForTest from '@/shared/config/i18/i18nForTest'
import { DeepPartial } from '@/shared/lib/helpers';
import { TStateShema } from '@/app/providers/StoreProvider/config/types';

type TRenderOptions = {
    route?: string
    initialState?: DeepPartial<TStateShema>
}

export const componentRender = (component: ReactNode, optins?: TRenderOptions) => {
    const {route = RoutePath.main,  initialState} = optins || {};
    return render(
        <StoreProvider initialState={initialState}>
            <I18nextProvider i18n={i18nForTest}>
                <MemoryRouter initialEntries={[route]}>
                    {component}
                </MemoryRouter>,
            </I18nextProvider>
        </StoreProvider>
    )
}