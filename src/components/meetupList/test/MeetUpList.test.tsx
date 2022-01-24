import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';
import { BrowserRouter } from 'react-router-dom';

describe('MeetUpList component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList />
				</AppState>
			</BrowserRouter>
		);
	});

	it('should render list components', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList />
				</AppState>
			</BrowserRouter>
		);

		const listItem = screen.getAllByRole('listitem');

		expect(listItem[0]).toBeInTheDocument();
	});

	it('should render list divider', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList />
				</AppState>
			</BrowserRouter>
		);

		const listItem = screen.getByText(/alla meetups/i);

		expect(listItem).toBeInTheDocument();
	});
});
