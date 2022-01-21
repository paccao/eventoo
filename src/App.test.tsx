import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

function MockRouter() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

describe('App component', () => {
    it(' renders without crashing', () => {
        render(<MockRouter />);
    });
});

test('App component has darkmode', () => {
    render(<MockRouter />);

    const appContainer = screen.getByTestId('app-container');

    expect(appContainer).toHaveStyle('background-color: #151515');
});
