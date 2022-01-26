import React from 'react';
import { render, screen } from '@testing-library/react';
import AppState from '../../../context/AppState';
import { BrowserRouter } from 'react-router-dom';

import MeetUpListModule from '../MeetupListModule';



describe('MeetUpListModule component', () => {
	it('should render', () => {
		<BrowserRouter>
			<AppState>
				<MeetUpListModule />
			</AppState>
		</BrowserRouter>;
	});
});
