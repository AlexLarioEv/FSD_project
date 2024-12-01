import { screen, fireEvent } from '@testing-library/react';

import { componentRender } from '@/shared/lib/test';

// import { addCommentActions } from '../model/slice/addCommentSlice';
import AddCommentForm from './AddCommentForm';

const mockOnSendComment = jest.fn();

const renderComponent = (store = { addCommentForm: { text: '' } }) => {
    return componentRender(
        <AddCommentForm onSendComment={mockOnSendComment} />,
        { initialState: store },
    );
};

describe('AddCommentForm', () => {
    test('renders input and button', () => {
        renderComponent();

        expect(screen.getByTestId('add_comment')).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /add/i }),
        ).toBeInTheDocument();
    });

    // TODO: починить тесты

    // test('dispatches setComment action on input change', () => {
    //     renderComponent();
    //     const input = screen.getByTestId('add_comment');
    //     const newComment = 'New comment';

    //     fireEvent.change(input, { target: { value: newComment } });

    //     expect(input).toHaveValue(newComment);
    //     expect(addCommentActions.setComment).toHaveBeenCalledWith(newComment);
    // });

    // test('calls onSendComment and clears input when button is clicked with text in input', () => {
    //     const initialComment = 'Initial comment';
    //     renderComponent({ addCommentForm: { text: initialComment } });

    //     const button = screen.getByRole('button', { name: /add/i });
    //     fireEvent.click(button);

    //     expect(mockOnSendComment).toHaveBeenCalledWith(initialComment);
    //     expect(addCommentActions.setComment).toHaveBeenCalledWith('');
    // });

    test('does not call onSendComment when input is empty', () => {
        renderComponent();

        const button = screen.getByRole('button', { name: /add/i });
        fireEvent.click(button);

        expect(mockOnSendComment).not.toHaveBeenCalled();
    });
});
