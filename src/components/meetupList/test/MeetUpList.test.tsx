import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';
import UiState from '../../../context/UiState';
import { BrowserRouter } from 'react-router-dom';

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

		const currentDateString = currentDate()

		const testData = [{
			id: '1',
			title: 'lördag på landet',
			tag: ['outdoors'],
			time: '2020-06-04 15:01',
			isOnline: false,
			location: 'Göteborg',
			timeStamp: Date.parse(currentDateString),
			image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			comments: [
				{
					id: '1',
					time: '2020-05-25',
					content: 'First comment!',
					role: 'guest',
				},
			],
		}, 
	]


		render(
			<BrowserRouter>
				<AppState>

					<MeetUpList 
					user={user}
					list={testData}   
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
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
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
					/>

				</AppState>
			</BrowserRouter>
		);

		const message = screen.getByRole('heading', { name: /no meetups found/i });

		expect(message).toBeInTheDocument();
	});

	it('should render "bookade meetups" divider', () => {
		render(
			<BrowserRouter>
				<AppState>

					<MeetUpList 
					user={user}
					list={[]}   
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
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
					divider={<InfoBlockDivider 
					text='Alla meetups' 
					toggle={<SwitchComponent />} />} 
					
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
						divider={<InfoBlockDivider 
						text='Bokade meetups' 
						toggle={<SwitchComponent />} />} 
						/>
				</AppState>
			</BrowserRouter>
		);

		const heading = screen.getByText(/bokade meetups/i);

		expect(heading).toHaveTextContent(/Bokade meetups/i);
	});

	
	it('should only render passed meetups when "Visa gamla meetups" toggle is clicked once"', () => {
		
		const currentDateString = currentDate()


		const testData = [{
			id: '1',
			title: 'lördag på landet',
			tag: ['outdoors'],
			time: '2020-06-04 15:01',
			isOnline: false,
			location: 'Göteborg',
			timeStamp: Date.parse(currentDateString),
			image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			comments: [
				{
					id: '1',
					time: '2020-05-25',
					content: 'First comment!',
					role: 'guest',
				},
			],
		}, 
	]

		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList 

					user={user}
					list={testData}   
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
					/>
				</UiState>
			</BrowserRouter>
		);

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle)

		const listItem = screen.queryByRole('heading', { name: /lördag på landet/i });

		expect(listItem).not.toBeInTheDocument()

	});

	it('should only render upcoming meetups when "Visa gamla" toggle is clicked twice"', () => {

		const currentDatePlusOneYearString = currentDatePlusOneYear()


		const testData = [{
			id: '1',
			title: 'lördag på landet',
			tag: ['outdoors'],
			time: currentDatePlusOneYearString,
			isOnline: false,
			location: 'Göteborg',
			timeStamp: Date.parse(currentDatePlusOneYearString),
			image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			comments: [
				{
					id: '1',
					time: '2020-05-25',
					content: 'First comment!',
					role: 'guest',
				},
			],
		}, 
	]

		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList 

					user={user}
					list={testData}   
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
					/>
				</UiState>
			</BrowserRouter>
		);

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle)

		const listItem = screen.queryByRole('heading', { name: /lördag på lan.../i });

		expect(listItem).toBeInTheDocument()

	});



		
	it('should sort by ascending order', () => {



		render(
			<BrowserRouter>
				<UiState>
					<MeetUpList 

					user={user}
					list={meetups}   
					divider={<InfoBlockDivider 
					text='Bokade meetups' 
					toggle={<SwitchComponent />} />} 
					
					/>
				</UiState>
			</BrowserRouter>
		);

	

		const toggle = screen.getByRole('checkbox');
		userEvent.click(toggle)

		const listItems = screen.getAllByRole('listitem');

		expect(listItems[0]).toHaveTextContent(/game night/i)
		


	});




}); 
