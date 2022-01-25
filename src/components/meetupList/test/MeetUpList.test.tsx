import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';
import { BrowserRouter } from 'react-router-dom';

import { meetups, user } from '../../../mockData';

import SwitchComponent from '../../globals/SwitchComponent';
import InfoBlockDivider from '../../globals/InfoBlockDivider';

describe('MeetUpList component', () => {
	// Global tests
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
					list={meetups}   
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
				<AppState>

					<MeetUpList 
					user={user}
					list={meetups}   
					divider={<InfoBlockDivider 
					text='Alla meetups' 
					toggle={<SwitchComponent />} />} 
					
					/>

				</AppState>
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

}); 




/* 
		// Nested tests
		describe('Alla meetups - section', () => {


			it('should render list divider "Alla meetups"', () => {
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

				const heading = screen.getByText(/alla meetups/i);

				expect(heading).toBeInTheDocument();
			});

			it('should render list divider with clickable toggle "visa sparade/visa kommande"', () => {
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

				const toggle = screen.getByText(/visa kommande/i);
				userEvent.click(toggle)

				
				expect(toggle).toHaveTextContent(/visa tidigare/i);
			});

		});




		// Nested tests
		describe('Bokade meetups - section', () => {


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

			it('should only render booked meetups', () => {
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

				const list = screen.getByTestId('booked-meetups');

				expect(list).toHaveTextContent(/Bokade meetups/i);
			});

		}); */