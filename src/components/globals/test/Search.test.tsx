import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search'


describe('Search component', () => {

	it('should render', () => {
		render(<Search />);
	});

	it('should have placeholder text', () => {
		render(<Search />);

		const inputField = screen.getByPlaceholderText(/sök på taggar/i)
		expect(inputField).toBeInTheDocument()
	});
	

});
