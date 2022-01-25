import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatSubmitForm from '../ChatSubmitForm';

describe('ChatSubmitForm component', () => {
    it('renders without crashing', () => {
        render(<ChatSubmitForm />);
    });

    it('should display a default text inside of the textbox', () => {
        render(<ChatSubmitForm />);
        screen.getByPlaceholderText(/meddelande\.\./);
    });

    it('should have an appropriate label connected to the input field', () => {
        render(<ChatSubmitForm />);

        expect(screen.getByLabelText(/Input/)).toBeInTheDocument();
    });

    test('that the button displays relevant text', () => {
        render(<ChatSubmitForm />);
        screen.getByRole('button', {
            name: /SKICKA/,
        });
    });

    test('on submit that the input field can not be empty', () => {
        render(<ChatSubmitForm />);
        userEvent.type(screen.getByRole('textbox'), 'test input!');
        expect(screen.getByRole('textbox')).not.toHaveValue('');
    });
});
