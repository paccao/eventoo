import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import UiState from './context/UiState';
import AppState from './context/AppState';

function IntegrationTestWrapper() {
    return (
        <BrowserRouter>
            <AppState>
                <UiState>
                    <App />
                </UiState>
            </AppState>
        </BrowserRouter>
    );
}

describe('App component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('renders without crashing', () => {
        render(<IntegrationTestWrapper />);
    });

    describe('When crating new meetup', () => {
        it('Renders the newly added meetup in the list of comming meetups', () => {
            render(<IntegrationTestWrapper />);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const titleInput = screen.getByPlaceholderText(/titel:/i);
            const tagInput = screen.getByPlaceholderText(/ämne:/i);
            const imageInput = screen.getByPlaceholderText(/bild:/i);
            const locationInput = screen.getByPlaceholderText(/plats:/i);

            userEvent.type(titleInput, 'Adam');
            userEvent.type(tagInput, 'Javascript');
            userEvent.type(locationInput, 'Lödöse');
            userEvent.type(imageInput, 'testbild');

            const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
            expect(submitBtn).toBeInTheDocument();
            userEvent.click(submitBtn);

            const futureEventList = screen.getByText(/alla meetups/i);

            expect(submitBtn).not.toBeInTheDocument();
            expect(futureEventList).toBeInTheDocument();

            const newMeetup = screen.getByText(/Lödöse/i);

            expect(newMeetup).toBeInTheDocument();
        });
    });

    test('App component has darkmode', () => {
        render(<IntegrationTestWrapper />);

        const appContainer = screen.getByTestId('app-container');

        expect(appContainer).toHaveStyle('background-color: #151515');
    });

    describe('When editing meetups', () => {
        it('New title shows up on meetup page when changed', () => {
            render(<IntegrationTestWrapper />);
            const newTitle = 'Game day';

            const meetup = screen.getByText(/game night/i);

            userEvent.click(meetup);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const editMeetupBtn = screen.getByText('redigera');
            userEvent.click(editMeetupBtn);

            const title = screen.getByDisplayValue(/game night/i);

            userEvent.type(title, '{selectall}{backspace}' + newTitle);

            const submitBtn = screen.getByRole('button', { name: /uppdatera/i });
            userEvent.click(submitBtn);

            const updatedTitle = screen.getByText(newTitle);

            expect(updatedTitle).toBeInTheDocument();
        });
    });
    describe('When deleting meetups', () => {
        it('User is redirected to home page', () => {
            render(<IntegrationTestWrapper />);

            const meetup = screen.getByText(/game night/i);

            userEvent.click(meetup);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const editMeetupBtn = screen.getByText('redigera');
            userEvent.click(editMeetupBtn);

            const deleteBtn = screen.getByRole('button', { name: /radera/i });
            userEvent.click(deleteBtn);

            const confirm = screen.getByRole('button', { name: /ja, ta bort/i });
            userEvent.click(confirm);

            const homePageText = screen.getByText(/alla meetups/i);

            expect(homePageText).toBeInTheDocument();
        });
        it('The deleted meetup is not in the list of alla meetups', () => {
            render(<IntegrationTestWrapper />);

            const meetup = screen.getByText(/game night/i);

            userEvent.click(meetup);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const editMeetupBtn = screen.getByText('redigera');
            userEvent.click(editMeetupBtn);

            const deleteBtn = screen.getByRole('button', { name: /radera/i });
            userEvent.click(deleteBtn);

            const confirm = screen.getByRole('button', { name: /ja, ta bort/i });
            userEvent.click(confirm);

            const homePageText = screen.getByText(/alla meetups/i);

            expect(homePageText).toBeInTheDocument();

            const deletedmeeting = screen.queryByText(/game night/i);
            const notDeletedMeeting = screen.getByText(/lördag på lan/i);
            expect(notDeletedMeeting).toBeInTheDocument();
            expect(deletedmeeting).not.toBeInTheDocument();
        });
    });

    describe('when user clicks on a meetup card', () => {
        it('should link user to a meetup page corresponding to the selected meetup', () => {
            render(<IntegrationTestWrapper />);

            const changeRoleBtn = screen.getByRole('button', { name: /byt roll/i });
            userEvent.click(changeRoleBtn);

            const createMeetupBtn = screen.getByTestId('create-meetup-btn');
            userEvent.click(createMeetupBtn);

            const titleInput = screen.getByPlaceholderText(/titel:/i);
            const tagInput = screen.getByPlaceholderText(/ämne:/i);
            const imageInput = screen.getByPlaceholderText(/bild:/i);
            const locationInput = screen.getByPlaceholderText(/plats:/i);
            const description = screen.getByPlaceholderText(/beskrivning:/i);

            userEvent.type(titleInput, 'FutureEvent');
            userEvent.type(tagInput, 'bluegrass');
            userEvent.type(locationInput, 'gränna');
            userEvent.type(imageInput, 'img');
            userEvent.type(description, 'description to find');

            const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
            expect(submitBtn).toBeInTheDocument();
            userEvent.click(submitBtn);

            const meetupToClickOn = screen.getByText(/FutureEvent/i);

            userEvent.click(meetupToClickOn);

            const descriptionToFind = screen.getByText('description to find');

            expect(descriptionToFind).toHaveTextContent('description to find');
        });
    });
});
