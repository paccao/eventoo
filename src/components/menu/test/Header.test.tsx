import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UiState from '../../../context/UiState';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';

function WrappedHeader() {
    return (
        <BrowserRouter>
            <UiState>
                <Header />
            </UiState>
        </BrowserRouter>
    );
}

describe('Header component', () => {
    it('renders component on page without crashing', () => {
        render(<WrappedHeader />);
    });

    describe('When Changing role', () => {
        it('Btn with text "Byt roll" is visible', () => {
            render(<WrappedHeader />);
            screen.getByRole('button', { name: /byt roll/i });
        });

        it('Text with Admin shows in header when button is pressed once', () => {
            render(<WrappedHeader />);
            //
            changeRole();

            const adminText = screen.getByText(/admin/i);

            expect(adminText).toBeInTheDocument();
        });
        it('Text with Admin does not show in header when buton is pressed two times', () => {
            render(<WrappedHeader />);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);
            userEvent.click(changeRoleBtn);

            const adminText = screen.queryByText(/admin/i);

            expect(adminText).not.toBeInTheDocument();
        });
    });

    describe('Create new meeting', () => {
        it('Create new meeting btn is not vissible when role is not admin', () => {
            render(<WrappedHeader />);

            const element = screen.queryByTestId('create-meetup-btn');

            expect(element).not.toBeInTheDocument();
        });

        it('Create new meeting btn is vissible when role is admin', () => {
            render(<WrappedHeader />);
            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const element = screen.getByTestId('create-meetup-btn');

            expect(element).toBeInTheDocument();
        });

        it('Create new meeting modal is not visible when app first loads', () => {
            render(<WrappedHeader />);

            const element = screen.queryByText(/l??gg till meetup/i);
            expect(element).not.toBeInTheDocument();
        });

        it('Create new meeting modal is visible after clicking + button', () => {
            render(<WrappedHeader />);

            changeRole();

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const element = screen.queryByText(/l??gg till meetup/i);
            expect(element).toBeInTheDocument();
        });

        it('Modal is closed on successfull form submit', async () => {
            render(<WrappedHeader />);

            changeRole();

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const titleInput = screen.getByPlaceholderText(/titel:/i);
            const tagInput = screen.getByPlaceholderText(/??mne:/i);
            const imageInput = screen.getByPlaceholderText(/bild:/i);
            const locationInput = screen.getByPlaceholderText(/plats:/i);

            userEvent.type(titleInput, 'Nytt event');
            userEvent.type(tagInput, 'javascript');
            userEvent.type(locationInput, 'Hemma');
            userEvent.type(imageInput, 'https://test.com');

            const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
            userEvent.click(submitBtn);

            const element = screen.queryByText('l??gg till meetup..');

            expect(element).not.toBeInTheDocument();
        });
        it('Modal is NOT closed on form submit if all fields are not provided', async () => {
            render(<WrappedHeader />);

            changeRole();
            openCreateMeetingModal();

            const tagInput = screen.getByPlaceholderText(/??mne:/i);
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
    const element = screen.getByRole('button', { name: /byt roll/i });
    userEvent.click(element);
}

function openCreateMeetingModal(): void {
    const createMeetupBtn = screen.getByTestId('create-meetup-btn');
    userEvent.click(createMeetupBtn);
}
