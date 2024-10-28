import axios, {AxiosStatic}  from 'axios';

import {TAsyncThunk} from '@/app/providers/StoreProvider'
import { TStateSchema } from "@/app/providers/StoreProvider/config";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { DeepPartial } from '../../helpers';



type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, TAsyncThunk<RejectedValue>>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;
    getState: () => TStateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<TStateSchema>){
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(()=> state as TStateSchema);
        this.api = mockedAxios;
    }


    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {api: this.api});

        return result
    }
}