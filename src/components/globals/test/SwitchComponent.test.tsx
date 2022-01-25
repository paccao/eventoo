import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchComponent from '../SwitchComponent'
import TagChip from '../TagChip';

describe('TagChip component', () => {

	const mockFunction = jest.fn()

	it('should render', () => {
		render(<SwitchComponent />);
	});
	
	it('should have label rendered with props', () => {
		render(<SwitchComponent />);

        const label = screen.getByText(/visa kommande/i)

        expect(label).toBeInTheDocument()

	});

});
