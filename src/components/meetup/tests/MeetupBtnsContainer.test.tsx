import React, { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';
import { AppReducer } from '../../../context/AppReducer';

import userEvent from '@testing-library/user-event';

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

		const [ state, dispatch ] = useReducer(AppReducer, appInitialState);

		return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
	}

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
				<MockAppState>
					<MeetupBtnsContainer />
				</MockAppState>
			</UiContext.Provider>
		);
	}

	it('should contain two buttons "Delta" and "Editera" when logged in as admin', () => {
		render(<MockContext isLoggedIn={true} />);

		const buttonDelta = screen.getByRole('button', { name: 'delta' });
		const buttonEditera = screen.getByRole('button', { name: 'editera' });

		expect(buttonDelta).toBeInTheDocument();
		expect(buttonEditera).toBeInTheDocument();
	});

	it('should only contain "Delta" when not logged in as admin', () => {
		render(<MockContext isLoggedIn={false} />);

		const buttonDelta = screen.queryByRole('button', { name: 'delta' });
		const buttonEditera = screen.queryByRole('button', { name: 'editera' });

		expect(buttonDelta).toBeInTheDocument();
		expect(buttonEditera).not.toBeInTheDocument();
	});

	describe('Delta Button', () => {
		it('should change message you are attending the current meetup', () => {
			render(<MockContext isLoggedIn={false} />);
			const button = screen.getByRole('button', { name: /delta/i });

			userEvent.click(button);

			expect(button).toHaveTextContent(/deltar/i);
		});

		it('should only be clickable if the meetup is an upcoming meetup', () => {
			render(<MockContext isLoggedIn={false} />);

			const button = screen.getByRole('button', { name: /delta/i });

			userEvent.click(button);

			expect(button).toBeDisabled(/deltar/i);
		});

		it('should contain star icon when user is attending the current meetup', () => {
			render(<MockContext isLoggedIn={false} />);

			const button = screen.getByTestId('button', { name: /delta/i });

			userEvent.click(button);

			const startIcon = screen.getByTestId('star-icon');
			expect(startIcon).toBeInTheDocument();
			
		});
	});
});
