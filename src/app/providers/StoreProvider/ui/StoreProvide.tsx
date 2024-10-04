import {Provider} from 'react-redux';
import { FC, ReactNode } from "react";

import {createReduxStore} from '../config'
import { TStateSchema } from '../config/types';
import { DeepPartial } from '@/shared/lib/helpers';

type TStoreProvideProps = {
  children?: ReactNode;
  initialState?: DeepPartial<TStateSchema>
};

export const StoreProvider: FC<TStoreProvideProps> = ({ children,  initialState}) => {
    
    const store = createReduxStore(initialState as TStateSchema)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};