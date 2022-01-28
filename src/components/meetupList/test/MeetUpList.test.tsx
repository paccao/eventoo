import React from 'react';
import { render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid';

import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';
import UiState from '../../../context/UiState';

import { BrowserRouter } from 'react-router-dom';
import { Meeting } from '../../../context/AppState';
import { meetups, user } from './mockData';
import { currentDate, currentDatePlusOneYear } from '../../../helpers/currentDate';

import SwitchComponent from '../../globals/SwitchComponent';
import InfoBlockDivider from '../../globals/InfoBlockDivider';

describe('MeetUpList component', () => {


	it('should render', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList
						user={user}
						list={meetups}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</AppState>
			</BrowserRouter>
		);
	});

	it('should render list components', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList
						user={user}
						list={testMeetup(true)}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</AppState>
			</BrowserRouter>
		);

		const listItem = screen.getAllByRole('listitem');

		expect(listItem[0]).toBeInTheDocument();
	});

	it('should render "No meetups found" message if there are no meetups', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList
						user={user}
						list={[]}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</AppState>
			</BrowserRouter>
		);

		const message = screen.getByRole('heading', { name: /no meetups found/i });

		expect(message).toBeInTheDocument();
	});

	it('should render list divider "Alla meetups"', () => {
		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList
						user={user}
						list={meetups}
						divider={
							<InfoBlockDivider text='Alla meetups' toggle={<SwitchComponent />} />
						}
					/>
				</UiState>
			</BrowserRouter>
		);

		const heading = screen.getByText(/alla meetups/i);

		expect(heading).toBeInTheDocument();
	});

	it('should render list divider "Bokade meetups"', () => {
		render(
			<BrowserRouter>
				<AppState>
					<MeetUpList
						user={user}
						list={meetups}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</AppState>
			</BrowserRouter>
		);

		const heading = screen.getByText(/bokade meetups/i);

		expect(heading).toHaveTextContent(/Bokade meetups/i);
	});

	it('should only render passed meetups when "Visa gamla meetups" toggle is clicked once"', () => {
		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList
						user={user}
						list={testMeetup(false)}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</UiState>
			</BrowserRouter>
		);

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle);

		const listItem = screen.queryByRole('heading', { name: 'lördag på landet' });

		expect(listItem).toBeInTheDocument();
	});

	it('should only render upcoming meetups when "Visa gamla" toggle is clicked twice"', () => {
		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList
						user={user}
						list={testMeetup(true)}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</UiState>
			</BrowserRouter>
		);

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle);
		userEvent.click(toggle);

		const listItem = screen.queryByRole('heading', { name: 'lördag på landet' });

		expect(listItem).toBeInTheDocument();
	});

	it('should sort all cards in ascending order by date', () => {
		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList
						user={user}
						list={meetups}
						divider={
							<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />
						}
					/>
				</UiState>
			</BrowserRouter>
		);
		
		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle);

		const listItems = screen.getAllByRole('heading', { name: 'game night' });

		expect(listItems[0]).toHaveTextContent('game night');
	});
});

function testMeetup(upcomingMeetup: boolean): Meeting[] {
	const currentDatePlusOneYearString = currentDatePlusOneYear(true);
	const currentDateString = currentDate();

	return [
		{
			id: nanoid(),
			title: 'lördag på landet',
			tag: ['outdoors'],
			time: upcomingMeetup ? currentDatePlusOneYearString : currentDateString,
			isOnline: false,
			location: 'Göteborg',
			timeStamp: upcomingMeetup
				? Date.parse(currentDatePlusOneYearString)
				: Date.parse(currentDateString),
			image:
				'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			comments: [
				{
					id: '1',
					time: '2020-05-25',
					content: 'First comment!',
					role: 'guest',
				},
			],
		},
	];
}
