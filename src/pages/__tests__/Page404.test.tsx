import { render, screen } from '@testing-library/react';
import Page404 from '../Page404'


describe('MeetupListPage component', () => {
    it('renders without crashing', () => {
        render(<Page404 />);
    });
    it('should say 404', () => {
        render(<Page404 />);

        const text = screen.getAllByRole('heading', { name: '404' })

        expect(text).toHaveTextContent('404')

    });
});

