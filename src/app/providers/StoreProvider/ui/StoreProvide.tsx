import { ReducersMapObject } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { FC, ReactNode } from "react";
import { DeepPartial } from '@/shared/lib/helpers';

import {createReduxStore} from '../config'
import { TStateSchema } from '../config/types';
import { useNavigate } from 'react-router-dom';

type TStoreProvideProps = {
  children?: ReactNode;
  initialState?: DeepPartial<TStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>
};

export const StoreProvider: FC<TStoreProvideProps> = ({ children,  initialState, asyncReducers}) => {
    const navigate = useNavigate()
    const store = createReduxStore(
        initialState as TStateSchema, 
        asyncReducers as ReducersMapObject<TStateSchema>, 
        navigate
    )
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};