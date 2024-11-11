import { ReducersMapObject } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { FC, ReactNode } from "react";
import { DeepPartial } from '@/shared/lib/helpers';

import {createReduxStore} from '../../../../shared/config/storeConfig'
import { TStateSchema } from '../../../../shared/config/storeConfig/types';

type TStoreProvideProps = {
  children?: ReactNode;
  initialState?: DeepPartial<TStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>
};

export const StoreProvider: FC<TStoreProvideProps> = ({ children,  initialState, asyncReducers}) => {
    const store = createReduxStore(
        initialState as TStateSchema, 
        asyncReducers as ReducersMapObject<TStateSchema>,
    )
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};