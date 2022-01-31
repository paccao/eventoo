import { render, screen } from '@testing-library/react';
import ChatMessageItem from '../ChatMessageItem';

describe('ChatMessageItem component', () => {
    const comment = {
        id: '0',
        time: '13:46:16',
        content: 'Coolt event!',
        role: 'Guest',
    };

    it('renders without crashing', () => {
        render(<ChatMessageItem {...comment} />);
    });

    it('should render the role of the author', () => {
        render(<ChatMessageItem {...comment} />);

        const roleElement = screen.getByText(/Guest/i || /Admin/i);
        expect(roleElement).toBeInTheDocument();
    });

    it('should display what the user wrote in their comment', () => {
        render(<ChatMessageItem {...comment} />);

        const content = screen.getByText(comment.content);
        expect(content).toBeInTheDocument();
    });
    it('should display the time of the comment', () => {
        render(<ChatMessageItem {...comment} />);

        const time = screen.getByText(comment.time);
        expect(time).toBeInTheDocument();
    });
});
