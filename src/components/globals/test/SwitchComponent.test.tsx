import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchComponent from '../SwitchComponent'


describe('TagChip component', () => {

	it('should render', () => {
		render(<SwitchComponent />);
	});
	
	it('should have label rendered with props', () => {
		render(<SwitchComponent />);

        const label = screen.getByText(/visa gamla/i)

        expect(label).toBeInTheDocument()

	});

});
