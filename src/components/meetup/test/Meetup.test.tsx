import { render, screen } from '@testing-library/react';
import AppState from '../../../context/AppState';
import { mockMeetups } from '../MockData';

import Meetup from '../Meetup';

describe('Meetup component', () => {
    beforeEach(() => {});

    it('Renders without crashing', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );
    });

    it('Renders with the correct title', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );

        const title = screen.getByText(/lördag på lan/);

        expect(title).toBeInTheDocument();
    });
    it('Renders with the correct time for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[0]} />
            </AppState>,
        );

        const time = screen.getByText(/2022-01-28 15:01/);

        expect(time).toBeInTheDocument();
    });
    it('Renders with the correct location for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const location = screen.getByText(/åsaka/i);

        expect(location).toBeInTheDocument();
    });
    it('Renders with the correct "tag" for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const tag = screen.getByText(/gaming/i);

        expect(tag).toBeInTheDocument();
    });
    it('Renders with the correct image for the event', () => {
        render(
            <AppState>
                <Meetup currentMeetup={mockMeetups[2]} />
            </AppState>,
        );

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
    });
});
