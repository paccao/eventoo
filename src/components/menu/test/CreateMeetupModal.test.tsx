import { render, screen } from '@testing-library/react';

import CreateMeetupModal from '../CreateMeetupModal';

describe('CreateMeetupBtn component', () => {
    it('renders without crashing', () => {
        render(<CreateMeetupModal />);
    });
    it('Has input with placeholder "titel"', () => {
        render(<CreateMeetupModal />);

        const titel = screen.getByPlaceholderText(/titel/);

        expect(titel).toBeInTheDocument();
    });
    it('Has input with placeholder "ämne"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/ämne/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with placeholder "bild"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/bild/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with placeholder "plats"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/plats/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with placeholder "date"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/date/);

        expect(element).toBeInTheDocument();
    });
    it('Has input with placeholder "time"', () => {
        render(<CreateMeetupModal />);

        const element = screen.getByPlaceholderText(/time/);

        expect(element).toBeInTheDocument();
    });
});
