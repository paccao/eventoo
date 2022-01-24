import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function MockRouter() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

describe('App component', () => {
    it('renders without crashing', () => {
        render(<MockRouter />);
    });

    it('should link to a detailed meetup page corelating with the clicked meetup card', () => {
        render(<MockRouter />);

        const listItem = screen.getByTestId('list-info-container');
        userEvent.click(listItem);

        const newPage = screen.getByText(/Meetup page/i);

        expect(newPage).toBeInTheDocument();
    });
});

test('App component has darkmode', () => {
    render(<MockRouter />);

    const appContainer = screen.getByTestId('app-container');

    expect(appContainer).toHaveStyle('background-color: #151515');
});
