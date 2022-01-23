import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';

describe('MeetUpList component', () => {
	it('should render', () => {
        render(
			<AppState>
				<MeetUpList />
			</AppState>
		);
	});

	it('should render list components', () => {
		render(
			<AppState>
				<MeetUpList />
			</AppState>
		);

		const listItem = screen.getAllByRole('listitem');

		expect(listItem[0]).toBeInTheDocument();
	});

    
});
