import {counterReducer, counterActions} from './counterSlice'
import { TCounterSchema } from '../types';

describe('counterSlice.test', ()=>{
    const state: TCounterSchema = {value: 10};

    test('decremented', ()=> {
        expect(counterReducer(state, counterActions.decremented())).toEqual({value: 9});
    });

    test('incremented', ()=> {
        expect(counterReducer(state, counterActions.incremented())).toEqual({value: 11});
    });

    test('incremented', ()=> {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual({value: 1});
    });
});
