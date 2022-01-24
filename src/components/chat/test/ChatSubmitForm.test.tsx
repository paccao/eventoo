import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatSubmitForm from '../ChatSubmitForm';

describe('ChatSubmitForm component', () => {
    it('renders without crashing', () => {
        render(<ChatSubmitForm />);
    });

    it('should display a label inside of the textbox', () => {
        render(<ChatSubmitForm />);
        screen.getByText(/Input/);
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
