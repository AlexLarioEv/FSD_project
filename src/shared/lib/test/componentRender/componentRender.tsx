/* eslint-disable alexlario-plugin/layer-imports */
import { ReactNode, PropsWithChildren, ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next';
import { render } from "@testing-library/react";
import { ReducersMapObject } from '@reduxjs/toolkit';
import { MemoryRouter} from 'react-router-dom'

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import {StoreProvider} from '@/app/providers/StoreProvider'
import {getRouteMain} from '@/shared/config/routeConfig'
import i18nForTest from '@/shared/config/i18/i18nForTest'
import { TStateSchema } from '@/shared/config/storeConfig/types';
import { ETheme } from '@/shared/contexts';


import '@/app/styles/index.scss';
import { DeepPartial } from '../../helpers';

export type TRenderOptions = {
    route?: string
    initialState?: DeepPartial<TStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>
}

export type TPropsTestProvider = PropsWithChildren<{
    options?: TRenderOptions;
}>

export function TestProvider({options, children}: TPropsTestProvider): ReactElement {
    const {route = getRouteMain(),  initialState, asyncReducers} = options || {};

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider value={ETheme.LIGHT} >
                        {children}
                    </ThemeProvider  >
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export const componentRender = (component: ReactNode, options?: TRenderOptions) =>  
    render(<TestProvider options={options}>{component}</TestProvider>)