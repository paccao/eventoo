import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeetUpListItem from '../MeetUpListItem';

import { BrowserRouter } from 'react-router-dom';

describe('MeetUpListItem component', () => {
	const meeting = {
		id: '0',
		title: 'lördag på landet',
		tag: ['outdoors'],
		time: 'Lördag 20 Jan 18.00',
		location: 'Göteborg',
		image: 'http://example.se',
	};

	function MockRouter() {
		return (
			<BrowserRouter>
				<MeetUpListItem isAttending={false} {...meeting} />
			</BrowserRouter>
		);
	}

	it('should render', () => {
		render(<MockRouter />);
	});

	it('should have clickable image', () => {
		render(<MockRouter />);

		const image = screen.getByRole('img');

		expect(image).toHaveStyle('cursor: pointer');
	});

	it('should have clickable info container', () => {
		render(<MockRouter />);

		const infoContainer = screen.getByTestId('list-info-container');

		expect(infoContainer).toHaveStyle('cursor: pointer');
	});

	it('should have date and location info', () => {
		render(<MockRouter />);

		const text = screen.getByRole('heading', { name: /göteborg/i });

		expect(text).toHaveTextContent(/göteborg/i);
		expect(text).toHaveTextContent(/20/i);
	});

	it('should have title present', () => {
		render(<MockRouter />);

		const text = screen.getByRole('heading', { name: 'lördag på landet' });

		expect(text).toHaveTextContent('lördag på landet');
	});

	it('should have type tag present', () => {
		render(<MockRouter />);

		const tag = screen.getByText('outdoors');

		expect(tag).toBeInTheDocument();
	});

	it('should have image present', () => {
		render(<MockRouter />);

		const image = screen.getByRole('img');

		expect(image).toBeInTheDocument();
	});

	it('should contain link to detailed meetup-page', () => {
		render(<MockRouter />);

		const link = screen.getAllByRole('link');

		expect(link[0]).toBeInTheDocument();
	});

	it('should show star when user is attending', () => {
		render(
			<BrowserRouter>
				<MeetUpListItem isAttending={true} {...meeting} />
			</BrowserRouter>
		);

		const starIcon = screen.getByText(/Attending/i);
		expect(starIcon).toBeInTheDocument();
	});

	it('should not show star when user is not attending', () => {
		render(
			<BrowserRouter>
				<MeetUpListItem isAttending={false} {...meeting} />
			</BrowserRouter>
		);

		const starIcon = screen.queryByText(/Attending/i);
		expect(starIcon).not.toBeInTheDocument();
	});

});
