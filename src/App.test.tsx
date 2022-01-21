import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it(' renders without crashing', () => {
        render(<App />);
    });

    it('meetup-list page component renders at the corresponding url', () => {
        render(<App />);
        const pathname = '/';
    });

    it('meetup page component renders at the corresponding url', () => {
        render(<App />);
        const pathname = '/meetup';
    });
});
