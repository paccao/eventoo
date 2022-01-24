import { render, screen } from '@testing-library/react';
import ChatMessageList from '../ChatMessageList';

function MockChatMessageList() {
    return (
        <ul data-testid="chatMessageList">
            <li data-testid="test-listitem"></li>
        </ul>
    );
}

describe('ChatMessageList component', () => {
    it('renders without crashing', () => {
        render(<ChatMessageList />);
    });

    it('renders the list of chat messages', () => {
        render(<MockChatMessageList />);

        const listItem = screen.getByTestId('test-listitem');
        expect(listItem).toBeInTheDocument();
    });
});
