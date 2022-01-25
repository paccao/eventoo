import { render, screen } from '@testing-library/react';

import CreateMeetupModal from '../CreateMeetupModal';

describe('CreateMeetupBtn component', () => {
    it('renders without crashing', () => {
        render(<CreateMeetupModal />);
    });
    it('Has input with field "titel"', () => {
        render(<CreateMeetupModal />);

        const titel = screen.getByPlaceholderText(/titel/);

        expect(titel).toBeInTheDocument();
    });
    it('Has input with field "ämne"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/ämne/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with field "bild"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/bild/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with field "plats"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/plats/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with field "date"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/date/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with field "time"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/time/);

        expect(element).toBeInTheDocument();
    });
});
