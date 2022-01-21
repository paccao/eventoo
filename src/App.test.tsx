import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it(' renders without crashing', () => {
        render(<App />);
    });
});

test('App component has darkmode', () => {
    render(<App />);

    const appContainer = screen.getByTestId('app-container')

    expect(appContainer).toHaveStyle('background-color: #121212')



});

