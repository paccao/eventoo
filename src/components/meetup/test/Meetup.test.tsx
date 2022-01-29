import { useReducer } from 'react';

import { render, screen } from '@testing-library/react';
import AppState from '../../../context/AppState';
import { mockMeetups } from '../MockData';

import Meetup from '../Meetup';
import userEvent from '@testing-library/user-event';
import { UiReducer } from '../../../context/UiReducer';
import { UiContext } from '../../../context/UiState';
import { BrowserRouter } from 'react-router-dom';

describe('Meetup component', () => {
    function MockContext({ isLoggedIn }: { isLoggedIn: boolean }) {
        const uiInitialState = {
            isPassedMeetups: false,
            isAdmin: isLoggedIn && true,
            showCreateMeetingModal: false,
            showEditDeleteModal: false,
        };

        const [state, dispatch] = useReducer(UiReducer, uiInitialState);

        return (
            <UiContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Meetup currentMeetup={mockMeetups[0]} />
                </BrowserRouter>
            </UiContext.Provider>
        );
    }

    beforeEach(() => {});

    it('Renders without crashing', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );
    });

    it('Renders with the correct title', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );

        const title = screen.getByText(/lördag på lan/);

        expect(title).toBeInTheDocument();
    });
    it('Renders with the correct time for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );

        const time = screen.getByText(/2023-01-28 15:01/);

        expect(time).toBeInTheDocument();
    });
    it('Renders with the correct location for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const location = screen.getByText(/åsaka/i);

        expect(location).toBeInTheDocument();
    });
    it('Renders with the correct "tag" for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const tag = screen.getByText(/gaming/i);

        expect(tag).toBeInTheDocument();
    });
    it('Renders with the correct image for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
    });

    describe('Edit Meetup', () => {
        it('opens edit meetup modal when "edit" is clicked', () => {
            render(<MockContext isLoggedIn={true} />);

            const editBtn = screen.getByRole('button', { name: /redigera/i });

            userEvent.click(editBtn);

            const modal = screen.getByText(/ändra meetup/i);

            expect(modal).toBeInTheDocument();
        });
        it('Input fields is prefilled with current meeting details', () => {
            render(<MockContext isLoggedIn={true} />);

            const editBtn = screen.getByRole('button', { name: /redigera/i });

            userEvent.click(editBtn);
            screen.getByDisplayValue(/lördag på landet/i);
        });
    });
});
