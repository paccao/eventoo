import { render, screen } from '@testing-library/react';
import ChatSubmitForm from '../ChatSubmitForm';

describe('ChatSubmitForm component', () => {
    it('renders without crashing', () => {
        render(<ChatSubmitForm />);
    });

    it('should display a label inside of the textbox', () => {
        render(<ChatSubmitForm />);
        screen.getByText(/meddelande\.\./);
    });

    test('that the button displays relevant text', () => {
        render(<ChatSubmitForm />);
        screen.getByRole('button', {
            name: /SKICKA/,
        });
    });
});
