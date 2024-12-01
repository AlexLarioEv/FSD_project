import { getCounterValue } from './getCounterValue';
import { TStateSchema } from '@/shared/config/storeConfig/types';
import { DeepPartial } from '@/shared/lib/helpers';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<TStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as TStateSchema)).toEqual(10);
    });
});
