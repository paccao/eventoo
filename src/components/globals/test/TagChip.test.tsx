import React from 'react';
import { render, screen } from '@testing-library/react';

import TagChip from '../TagChip';

describe('TagChip component', () => {
	it('should render', () => {
		render(<TagChip text={'hello'} />);
	});

	it('should render correct text', () => {
		render(<TagChip text={'hello'} />);

		const tagChip = screen.getByText(/hello/i);

		expect(tagChip).toHaveTextContent(/hello/i);
	});
});
