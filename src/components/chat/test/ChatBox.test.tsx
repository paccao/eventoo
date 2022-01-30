import { render, screen } from '@testing-library/react';
import ChatBox from '../ChatBox';
import userEvent from '@testing-library/user-event';
import { meetups } from './mockData';
import AppState from '../../../context/AppState';

describe('ChatBox component', () => {
    it('renders without crashing', () => {
        render(<ChatBox urlId={'testID'} currentMeetup={meetups[0]} />);
    });

    it('should render the info block divider', () => {
        render(<ChatBox urlId={'testID'} currentMeetup={meetups[0]} />);
        const infoDivider = screen.getByText(/diskussion/i);
        expect(infoDivider).toBeInTheDocument();
    });

    it('should render the list of chat messages', () => {
        render(<ChatBox urlId={'testID'} currentMeetup={meetups[0]} />);
        const listNode = screen.getByRole('list');
        expect(listNode).toBeInTheDocument();
    });

    it('should render the chat input field', () => {
        render(<ChatBox urlId={'testID'} currentMeetup={meetups[0]} />);
        const inputBoxNode = screen.getByRole('textbox');
        expect(inputBoxNode).toBeInTheDocument();
    });

    it('should render the chat enter button', () => {
        render(<ChatBox urlId={'testID'} currentMeetup={meetups[0]} />);
        const inputBoxNode = screen.getByRole('button');
        expect(inputBoxNode).toBeInTheDocument();
    });

    test("a new comment should be added to the meeting's list of comments on submit", () => {
        render(
            <AppState>
                <ChatBox urlId={'1'} currentMeetup={meetups[0]} />
            </AppState>,
        );

    
        
        const inputField = screen.getByRole('textbox')
        userEvent.type(inputField, 'fun');

        const button = screen.getByRole('button')
        userEvent.click(button);

        const listItems = screen.getAllByRole('listitem')

 
        expect(listItems[0]).toBeInTheDocument();
    });
});
