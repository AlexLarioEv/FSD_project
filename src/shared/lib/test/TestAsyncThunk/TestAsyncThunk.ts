import { TStateSchema } from "@/app/providers/StoreProvider/config";
import { AsyncThunkAction } from "@reduxjs/toolkit";


type TActionCreator<Return, Arg, RejectedValue> = (arg: Arg) => 
    AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;
    getState: () => TStateSchema;
    actionCreator: TActionCreator<Return, Arg, RejectedValue>

    constructor(actionCreator: TActionCreator<Return, Arg, RejectedValue>){
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }


    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result
    }
}