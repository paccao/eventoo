import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchComponent from '../SwitchComponent'
import TagChip from '../TagChip';

describe('TagChip component', () => {
	it('should render', () => {
		render(<SwitchComponent />);
	});
	it('should have label rendered with props', () => {
		render(<SwitchComponent />);

        const label = screen.getAllByRole('form', { name: /visa sparade/i })

        expect(label).toBeInTheDocument()

	});

});
