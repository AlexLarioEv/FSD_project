/* eslint-disable alexlario-plugin/layer-imports */
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import { render } from "@testing-library/react";
import { ReducersMapObject } from '@reduxjs/toolkit';
import { MemoryRouter} from 'react-router-dom'

import {StoreProvider} from '@/app/providers/StoreProvider'
import {getRouteMain} from '@/shared/config/routeConfig'
import i18nForTest from '@/shared/config/i18/i18nForTest'
import { TStateSchema } from '@/shared/config/storeConfig/types';

import { DeepPartial } from '../../helpers';

export type TRenderOptions = {
    route?: string
    initialState?: DeepPartial<TStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>
}

export const componentRender = (component: ReactNode, optins?: TRenderOptions) => {
    const {route = getRouteMain(),  initialState, asyncReducers} = optins || {};
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
}