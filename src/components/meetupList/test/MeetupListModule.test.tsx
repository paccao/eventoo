import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { meetups, user } from './mockData';
import { useReducer } from 'react';

import userEvent from '@testing-library/user-event';

import { AppReducer } from '../../../context/AppReducer';
import { AppContext } from '../../../context/AppState';

import { UiReducer } from '../../../context/UiReducer';
import { UiContext } from '../../../context/UiState';

import MeetUpListModule from '../MeetupListModule';

describe('MeetUpListModule component', () => {
	function MockAppState({ children }: React.PropsWithChildren<{}>) {
		const appInitialState = {
			meetings: meetups,
			user: user,
		};

		const [state, dispatch] = useReducer(AppReducer, appInitialState);

		return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
	}

	function ComponentWrappedInContext({ isLoggedIn }: { isLoggedIn: boolean }) {
		const uiInitialState = {
			isPassedMeetups: false,
			isAdmin: isLoggedIn && true,
			showCreateMeetingModal: false,
			showEditDeleteModal: false,
			searchString: '',
		};

		const [state, dispatch] = useReducer(UiReducer, uiInitialState);

		return (
			<UiContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<MockAppState>
						<MeetUpListModule />
					</MockAppState>
				</BrowserRouter>
			</UiContext.Provider>
		);
	}

	it('should render', () => {
		render(<ComponentWrappedInContext isLoggedIn={false} />)
	});

	it('should filter all cards by search criteria (tags) when user searches. (case insensitive)', () => {
		render(<ComponentWrappedInContext isLoggedIn={false} />);

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle);

		const searchBox = screen.getByRole('textbox');
		userEvent.type(searchBox, 'Fi');

		const listItems = screen.getAllByRole('listitem');

		expect(listItems).toHaveLength(4);
		expect(listItems[0]).toHaveTextContent(/fika/i);
		expect(listItems[1]).toHaveTextContent(/fika/i);
		expect(listItems[2]).toHaveTextContent(/fika/i);
		expect(listItems[3]).toHaveTextContent(/fika/i);
	});
});
