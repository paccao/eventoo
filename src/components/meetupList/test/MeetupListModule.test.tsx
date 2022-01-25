import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpList from '../MeetUpList';
import AppState from '../../../context/AppState';
import { BrowserRouter } from 'react-router-dom';

import { meetups, user } from '../../../mockData';

import SwitchComponent from '../../globals/SwitchComponent';
import InfoBlockDivider from '../../globals/InfoBlockDivider';

describe('MeeyUpListModule component', () => {


       it('should render', () => {
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

       })


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
