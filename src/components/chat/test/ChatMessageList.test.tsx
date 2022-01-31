import { render, screen } from '@testing-library/react';
import ChatMessageList from '../ChatMessageList';
import { meetups as mockMeetups, meetupsNoComments } from './mockData';

describe('ChatMessageList component', () => {
    it('renders without crashing', () => {
        render(<ChatMessageList urlId={'testID'} currentMeetup={mockMeetups[0]} />);
    });

    it('should render chat messages when there are any', () => {
        render(<ChatMessageList urlId={'testID'} currentMeetup={mockMeetups[0]} />);

        const listItem = screen.queryAllByRole('listitem');
        expect(listItem.length).toBe(mockMeetups[0].comments.length);
    });
    it('should show message that encourage user to write a comment', () => {
        render(<ChatMessageList urlId={'testID'} currentMeetup={meetupsNoComments[0]} />);
        const listItem = screen.queryAllByRole('listitem');
        expect(listItem.length).toBe(meetupsNoComments[0].comments.length);
        const message = screen.getByText(/No comments found. Be the first to write a comment!/i);
        expect(message).toBeInTheDocument();
    });
});
