/* eslint-disable alexlario-plugin/layer-imports */
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react/';

import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib/helpers';
import { TStateSchema } from '../../config/storeConfig';

export const StoreAndRouteDecorator: Decorator = (StoreComponent, context) => {
    // Передача state и asyncReducers через parameters в storybook
    const state: DeepPartial<TStateSchema> = context.parameters.state;
    const asyncReducers: DeepPartial<ReducersMapObject<TStateSchema>> =
        context.parameters.asyncReducers;

    return (
        <BrowserRouter>
            <StoreProvider initialState={state} asyncReducers={asyncReducers}>
                <StoreComponent />
            </StoreProvider>
        </BrowserRouter>
    );
};

export const createStateStory = (
    state?: DeepPartial<TStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>,
) => ({
    state,
    asyncReducers,
});
