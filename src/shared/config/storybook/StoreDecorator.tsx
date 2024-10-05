import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react/';

import {StoreProvider} from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib/helpers';
import { TStateSchema } from '@/app/providers/StoreProvider/config';

export const StoreDecorator: Decorator = (StoreComponent, context) => {


    const state: DeepPartial<TStateSchema> = context.parameters.state;
    const asyncReducers: DeepPartial<ReducersMapObject<TStateSchema>> = context.parameters.asyncReducers;

    return (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <StoreComponent/>
        </StoreProvider>
    )
}

export const createStateStory = (
    state?: DeepPartial<TStateSchema>, 
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>) => (
    {
        state, 
        asyncReducers
    }
)
  