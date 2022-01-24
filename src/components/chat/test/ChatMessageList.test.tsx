import { render, screen } from '@testing-library/react';
import ChatMessageList from '../ChatMessageList';

describe('ChatMessageList component', () => {
    it('renders without crashing', () => {
        render(<ChatMessageList />);
    });

    it('renders without crashing when there are no chat messages', () => {
        render(<ChatMessageList />);
    });

    // it('renders the list of chat messages', ()=>{
    // render(<ChatMessageList/>)

    // })
});
