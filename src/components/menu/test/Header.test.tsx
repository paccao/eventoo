import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppState from '../../../context/AppState';

import Header from '../Header';

describe('Header component', () => {
    it('renders component on page without crashing', () => {
        render(<Header />);
    });

    describe('When Changing role', () => {
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
        it('Text with Admin does not show in header when buton is pressed one additional time', () => {
            render(
                <AppState>
                    <Header />
                </AppState>,
            );

            const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
            userEvent.click(changeRoleBtn);

            const adminText = screen.queryByText(/admin/i);

            expect(adminText).not.toBeInTheDocument();
        });
    });

    describe('Create new meeting', () => {
        it('Create new meeting btn is not vissible when role is not admin', () => {
            render(
                <AppState>
                    <Header />
                </AppState>,
            );

            const element = screen.queryByTestId('create-meetup-btn');

            expect(element).not.toBeInTheDocument();
        });
        it('Create new meeting btn is vissible when role is admin', () => {
            render(
                <AppState>
                    <Header />
                </AppState>,
            );
            const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
            userEvent.click(changeRoleBtn);

            const element = screen.getByTestId('create-meetup-btn');

            expect(element).toBeInTheDocument();
        });
        it('Create new meeting modal is not visible when app loads', () => {
            render(
                <AppState>
                    <Header />
                </AppState>,
            );

            const element = screen.queryByText(/lägg till meetup/i);
            expect(element).not.toBeInTheDocument();
        });
        it('Create new meeting modal is visible after clicking + button', () => {
            render(
                <AppState>
                    <Header />
                </AppState>,
            );

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const element = screen.queryByText(/lägg till meetup/i);
            expect(element).toBeInTheDocument();
        });
    });
});
