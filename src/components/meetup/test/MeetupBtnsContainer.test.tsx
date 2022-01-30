import React, { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';
import { AppReducer } from '../../../context/AppReducer';

import userEvent from '@testing-library/user-event';
import { currentDatePlusOneYear, currentDatePlusOneHalfHour } from '../../../helpers/currentDate';

import { user, meetups } from './mockData';
import { render, screen } from '@testing-library/react';
import { UiContext } from '../../../context/UiState';
import { AppContext } from '../../../context/AppState';

import MeetupBtnsContainer from '../MeetupBtnsContainer';

describe('MeetupBtnsContainer component', () => {
    function MockAppState({ children }: React.PropsWithChildren<{}>) {
        const appInitialState = {
            meetings: meetups,
            user: user,
        };

        const [state, dispatch] = useReducer(AppReducer, appInitialState);

        return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
    }

    function MockContext({ isLoggedIn, date }: { isLoggedIn: boolean; date: string }) {
        const uiInitialState = {
            isPassedMeetups: false,
            isAdmin: isLoggedIn && true,
            showCreateMeetingModal: false,
            showEditDeleteModal: false,
            searchString: ''
        };

        const [state, dispatch] = useReducer(UiReducer, uiInitialState);

        return (
            <UiContext.Provider value={{ state, dispatch }}>
                <MockAppState>
                    <MeetupBtnsContainer id={'2'} date={date} />
                </MockAppState>
            </UiContext.Provider>
        );
    }

    it('should contain two buttons "Delta" and "Redigera" when logged in as admin', () => {
        render(<MockContext isLoggedIn={true} date={currentDatePlusOneYear(true)} />);

        const buttonDelta = screen.getByRole('button', { name: 'delta' });
        const buttonRedigera = screen.getByRole('button', { name: 'redigera' });

        expect(buttonDelta).toBeInTheDocument();
        expect(buttonRedigera).toBeInTheDocument();
    });

    it('should only contain "Delta" when not logged in as admin', () => {
        render(<MockContext isLoggedIn={false} date={currentDatePlusOneYear(true)} />);

        const buttonDelta = screen.queryByRole('button', { name: 'delta' });
        const buttonRedigera = screen.queryByRole('button', { name: 'redigera' });

        expect(buttonDelta).toBeInTheDocument();
        expect(buttonRedigera).not.toBeInTheDocument();
    });

    describe('Delta Button', () => {
        it('should change message you are attending the current meetup', () => {
            render(<MockContext isLoggedIn={false} date={currentDatePlusOneYear(true)} />);
            const button = screen.getByRole('button', { name: /delta/i });

            userEvent.click(button);

            expect(button).toHaveTextContent(/deltar/i);
        });

        it('should not be clickable if it "is too late to attend" (one hour before start)', () => {
            render(<MockContext isLoggedIn={false} date={currentDatePlusOneHalfHour()} />);

            const button = screen.getByRole('button', { name: /delta/i });

            userEvent.click(button);

            expect(button).toBeDisabled();
        });

        /* 		it('should contain star icon when user is attending the current meetup', () => {
			render(<MockContext isLoggedIn={false} />);

			const button = screen.getByTestId('button', { name: /delta/i });

			userEvent.click(button);

			const startIcon = screen.getByTestId('star-icon');
			expect(startIcon).toBeInTheDocument();

		}); */
    });
});
