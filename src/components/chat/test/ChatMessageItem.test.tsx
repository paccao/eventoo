import { render, screen } from '@testing-library/react';
import ChatMessageItem from '../ChatMessageItem';

describe('ChatMessageItem component', () => {
    const comment = {
        id: '0',
        time: 'Lördag 20 Jan 18.00',
        content: 'Coolt event!',
        role: 'Guest',
    };
    const MockItem = () => {
        return <ChatMessageItem {...comment} />;
    };

    it('renders without crashing', () => {
        render(<ChatMessageItem {...comment} />);
    });

    it('should display the role of the comment author', () => {
        render(<MockItem />);

        const roleElement = screen.getByText(/guest/i || /admin/i);
        expect(roleElement).toBeInTheDocument();
    });

    it('should display what the user wrote in their comment', () => {
        render(<ChatMessageItem {...comment} />);

        const content = screen.getByText(comment.content);
        expect(content).toBeInTheDocument();
    });

    it('should display the time of when the comment was left on the the meeting page', () => {
        render(<ChatMessageItem {...comment} />);

        const time = screen.getByText(comment.time);
        expect(time).toBeInTheDocument();
    });
});
