import { addCommentActions, addCommentReducer } from './addCommentSlice';
import { TAddCommentFormSchema } from '../types/addCommentSchema';

describe('addCommentSlice', () => {
    const state: TAddCommentFormSchema = { text: 'text', error: 'error' };

    test('setComment', () => {
        expect(
            addCommentReducer(
                state,
                addCommentActions.setComment('action text'),
            ),
        ).toEqual({ text: 'action text', error: 'error' });
    });

    test('state undefined', () => {
        expect(
            addCommentReducer(undefined, addCommentActions.setComment('')),
        ).toEqual({ text: '' });
    });
});
