import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UiState from '../../../context/UiState';

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

        it('Text with Admin shows in header when button is pressed once', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            //
            changeRole();

            const adminText = screen.getByText(/admin/i);

            expect(adminText).toBeInTheDocument();
        });
        it('Text with Admin does not show in header when buton is pressed two times', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
            userEvent.click(changeRoleBtn);
            userEvent.click(changeRoleBtn);

            const adminText = screen.queryByText(/admin/i);

            expect(adminText).not.toBeInTheDocument();
        });
    });

    describe('Create new meeting', () => {
        it('Create new meeting btn is not vissible when role is not admin', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            const element = screen.queryByTestId('create-meetup-btn');

            expect(element).not.toBeInTheDocument();
        });

        it('Create new meeting btn is vissible when role is admin', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );
            const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
            userEvent.click(changeRoleBtn);

            const element = screen.getByTestId('create-meetup-btn');

            expect(element).toBeInTheDocument();
        });

        it('Create new meeting modal is not visible when app first loads', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            const element = screen.queryByText(/lägg till meetup/i);
            expect(element).not.toBeInTheDocument();
        });

        it('Create new meeting modal is visible after clicking + button', () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            changeRole();

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const element = screen.queryByText(/lägg till meetup/i);
            expect(element).toBeInTheDocument();
        });

        it('Modal is closed on successfull form submit', async () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            changeRole();

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const titleInput = screen.getByPlaceholderText(/titel:/i);
            const tagInput = screen.getByPlaceholderText(/ämne:/i);
            const imageInput = screen.getByPlaceholderText(/bild:/i);
            const locationInput = screen.getByPlaceholderText(/plats:/i);

            userEvent.type(titleInput, 'Nytt event');
            userEvent.type(tagInput, 'javascript');
            userEvent.type(locationInput, 'Hemma');
            userEvent.type(imageInput, 'https://test.com');

            const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
            userEvent.click(submitBtn);

            const element = screen.queryByText('lägg till meetup..');

            expect(element).not.toBeInTheDocument();
        });
        it('Modal is NOT closed on form submit if all fields are not provided', async () => {
            render(
                <UiState>
                    <Header />
                </UiState>,
            );

            changeRole();
            openCreateMeetingModal();

            const titleInput = screen.getByPlaceholderText(/titel:/i);
            const tagInput = screen.getByPlaceholderText(/ämne:/i);
            const imageInput = screen.getByPlaceholderText(/bild:/i);
            const locationInput = screen.getByPlaceholderText(/plats:/i);

            userEvent.type(tagInput, 'javascript');
            userEvent.type(locationInput, 'Hemma');
            userEvent.type(imageInput, 'https://test.com');

            const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
            userEvent.click(submitBtn);

            expect(submitBtn).toBeInTheDocument();
        });
    });
});

function changeRole(): void {
    const element = screen.getByRole('button', { name: /change role/i });
    userEvent.click(element);
}

function openCreateMeetingModal(): void {
    const createMeetupBtn = screen.getByTestId('create-meetup-btn');
    userEvent.click(createMeetupBtn);
}
