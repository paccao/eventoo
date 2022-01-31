import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoBlockDivider from '../InfoBlockDivider'


describe('InfoBlockDivider component', () => {

	it('should render', () => {
		render(<InfoBlockDivider text='Alla meetups' />);
	});

	it('should display text "alla meetups" taken as props', () => {
		render(<InfoBlockDivider text='Alla meetups' />);

        const text = screen.getByRole('heading', { name: /alla meetups/i })

        expect(text).toHaveTextContent(/alla meetups/i)
	});

 	it('should have a clickable toggle switch', () => {
		render(<InfoBlockDivider text='Alla meetups' />);
	}); 

});
