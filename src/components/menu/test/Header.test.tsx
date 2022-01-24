import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppState from '../../../context/AppState';

import Header from '../Header';

describe('Header component', () => {
    it('renders component on page without crashing', () => {
        render(<Header />);
    });
    it('Btn with text change role is visible', () => {
        render(<Header />);
        screen.getByRole('button', { name: /change role/i });
    });

    it('Text with Admin shows in header when buton is pressed once', () => {
        render(
            <AppState>
                <Header />
            </AppState>,
        );

        const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
        userEvent.click(changeRoleBtn);

        const adminText = screen.getByText(/admin/i);

        expect(adminText).toBeInTheDocument();
    });
    it('Text with Admin does not show in header when buton is pressed twice', () => {
        render(
            <AppState>
                <Header />
            </AppState>,
        );

        const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
        userEvent.click(changeRoleBtn);
        userEvent.click(changeRoleBtn);

        const adminText = screen.queryByText(/admin/i);

        expect(adminText).not.toBeInTheDocument();
    });
});
