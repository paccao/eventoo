import { render, screen } from '@testing-library/react';
import ChatSubmitForm from '../ChatSubmitForm';

describe('ChatSubmitForm component', () => {
    it('renders without crashing', () => {
        render(<ChatSubmitForm urlId={'testID'} />);
    });

    it('should display a default text inside of the textbox', () => {
        render(<ChatSubmitForm urlId={'testID'} />);
        screen.getByPlaceholderText(/meddelande\.\./);
    });

    it('should have a label connected to the input field', () => {
        render(<ChatSubmitForm urlId={'testID'} />);

        expect(screen.getByTestId('label')).toBeInTheDocument();
    });

    test('that the button displays relevant text', () => {
        render(<ChatSubmitForm urlId={'testID'} />);
        const submitBtn = screen.getByRole('button', {
            name: /SKICKA/,
        });
        expect(submitBtn).toBeInTheDocument();
    });
});
