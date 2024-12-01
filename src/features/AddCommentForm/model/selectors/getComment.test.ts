import { DeepPartial } from '@/shared/lib/helpers';
import { getCommentError, getCommentText } from './getComment';
import { TStateSchema } from '@/shared/config/storeConfig';

const state: DeepPartial<TStateSchema> = {
    addCommentForm: { text: 'text', error: 'error' },
};

describe('getComment', () => {
    test('should return error value', () => {
        expect(getCommentError(state as TStateSchema)).toBe('error');
    });

    test('should return text value', () => {
        expect(getCommentText(state as TStateSchema)).toBe('text');
    });
});
