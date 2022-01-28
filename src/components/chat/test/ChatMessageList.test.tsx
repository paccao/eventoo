import { render, screen } from '@testing-library/react';
import AppState, { Comment } from '../../../context/AppState';
import ChatMessageList from '../ChatMessageList';
import { meetups as mockMeetups, meetupsNoComments } from './mockData';
import ChatMessageItem from '../ChatMessageItem';

function MockChatMessageList() {
    return (
        <ul data-testid="chatMessageList">
            {mockMeetups[0]?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </ul>
    );
}
function MockEmptyChatMessageList() {
    return (
        <ul data-testid="chatMessageList">
            {meetupsNoComments[0]?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </ul>
    );
}

describe('ChatMessageList component', () => {
    it('renders without crashing', () => {
        render(<ChatMessageList />);
    });

    it('should render chat messages when there are any', () => {
        render(
            <AppState>
                <MockChatMessageList />
            </AppState>,
        );

        const listItem = screen.queryAllByRole('listitem');
        expect(listItem[0]).toBeInTheDocument();
    });

    it("should not crash when there aren't any chat messages", () => {
        render(
            <AppState>
                <MockEmptyChatMessageList />
            </AppState>,
        );

        const listItem = screen.queryAllByRole('listitem');
        expect(listItem[0]).toBeUndefined();
    });
});
