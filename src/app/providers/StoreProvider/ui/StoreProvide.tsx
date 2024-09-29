import {Provider} from 'react-redux';
import { FC, ReactNode } from "react";

import {createReduxStore} from '../config'
import { TStateShema } from '../config/types';
import { DeepPartial } from 'shared/lib/helpers';

type TStoreProvideProps = {
  children?: ReactNode;
  initialState?: DeepPartial<TStateShema>
};

export const StoreProvider: FC<TStoreProvideProps> = ({ children,  initialState}) => {
    
    const store = createReduxStore(initialState as TStateShema)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};