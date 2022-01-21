import { render, screen } from '@testing-library/react';
import App from './App';

test('App component renders without crashing', () => {
    render(<App />);
});

test('App component has darkmode', () => {
    render(<App />);

    const appContainer = screen.getByTestId('app-container')

    expect(appContainer).toHaveStyle('background-color: #121212')



});

