import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import UiState from './context/UiState';
import AppState from './context/AppState';

function MockRouter() {
	return (
		<BrowserRouter>
			<AppState>
				<UiState>
					<App />
				</UiState>
			</AppState>
		</BrowserRouter>
	);
}

describe('App component', () => {
    
	beforeEach(() => {
		localStorage.clear();
	});

	it('renders without crashing', () => {
		render(<MockRouter />);
	});

	describe('When crating new meetup', () => {
		it('Renders the newly added meetup in the list of comming meetups', () => {
			render(<MockRouter />);

			const changeRoleBtn = screen.getByRole('button', { name: /change role/i });
			userEvent.click(changeRoleBtn);

			const createMeetupBtn = screen.getByTestId('create-meetup-btn');
			userEvent.click(createMeetupBtn);

			const titleInput = screen.getByPlaceholderText(/titel:/i);
			const tagInput = screen.getByPlaceholderText(/ämne:/i);
			const imageInput = screen.getByPlaceholderText(/bild:/i);
			const locationInput = screen.getByPlaceholderText(/plats:/i);

			userEvent.type(titleInput, 'Adam');
			userEvent.type(tagInput, 'Javascript');
			userEvent.type(locationInput, 'Lödöse');
			userEvent.type(imageInput, 'testbild');

			const submitBtn = screen.getByRole('button', { name: /SKAPA/i });
			expect(submitBtn).toBeInTheDocument();
			userEvent.click(submitBtn);

			const futureEventList = screen.getByText(/alla meetups/i);

			expect(submitBtn).not.toBeInTheDocument();
			expect(futureEventList).toBeInTheDocument();

			const newMeetup = screen.getByText(/Lödöse/i);

			expect(newMeetup).toBeInTheDocument();
		});
	});

	test('App component has darkmode', () => {
		render(<MockRouter />);

		const appContainer = screen.getByTestId('app-container');

		expect(appContainer).toHaveStyle('background-color: #151515');
	});
});
