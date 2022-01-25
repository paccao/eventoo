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
});
