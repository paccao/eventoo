import { useReducer } from 'react';

import { render, screen } from '@testing-library/react';
import ChatBox from '../ChatBox';
import userEvent from '@testing-library/user-event';
import { meetups, user } from './mockData';

import { AppContext } from '../../../context/AppState';
import { AppReducer } from '../../../context/AppReducer';
import { UiReducer } from '../../../context/UiReducer';
import { UiContext } from '../../../context/UiState';

describe('ChatBox component', () => {
    function MockAppState({ children }: React.PropsWithChildren<{}>) {
        const appInitialState = {
            meetings: meetups,
            user: user,
        };

        const [state, dispatch] = useReducer(AppReducer, appInitialState);

        return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
    }

    function ChatBoxWrappedInContext({ isLoggedIn }: { isLoggedIn: boolean }) {
        const uiInitialState = {
            isPassedMeetups: false,
            isAdmin: isLoggedIn && true,
            showCreateMeetingModal: false,
            showEditDeleteModal: false,
            searchString: '',
        };

        const [state, dispatch] = useReducer(UiReducer, uiInitialState);

        return (
            <UiContext.Provider value={{ state, dispatch }}>
                <MockAppState>
                    <ChatBox urlId={'1'} />
                </MockAppState>
            </UiContext.Provider>
        );
    }

    it('renders without crashing', () => {
        render(<ChatBox urlId={'testID'} />);
    });

    it('should render the info block divider', () => {
        render(<ChatBox urlId={'testID'} />);
        const infoDivider = screen.getByText(/diskussion/i);
        expect(infoDivider).toBeInTheDocument();
    });

    it('should render the list of chat messages', () => {
        render(<ChatBox urlId={'testID'} />);
        const listNode = screen.getByRole('list');
        expect(listNode).toBeInTheDocument();
    });

    it('should render the chat input field', () => {
        render(<ChatBoxWrappedInContext isLoggedIn={true} />);
        const inputBoxNode = screen.getByRole('textbox');
        expect(inputBoxNode).toBeInTheDocument();
    });

    it('should render the chat enter button', () => {
        render(<ChatBoxWrappedInContext isLoggedIn={true} />);
        const inputBoxNode = screen.getByRole('button');
        expect(inputBoxNode).toBeInTheDocument();
    });

    describe('When adding new comment', () => {
        test("a new comment should be added to the meeting's list of comments on submit", () => {
            render(<ChatBoxWrappedInContext isLoggedIn={true} />);

            const inputField = screen.getByRole('textbox');
            userEvent.type(inputField, 'fun');

            const button = screen.getByRole('button');
            userEvent.click(button);

            const newComment = screen.getByText('fun');

            expect(newComment).toBeInTheDocument();
        });

        test("a new comment should not be added to the meeting's list if comment is an empty string", () => {
            render(<ChatBoxWrappedInContext isLoggedIn={true} />);

            const listitemsBefore = screen.getAllByRole('listitem');

            screen.getByRole('textbox');

            const button = screen.getByRole('button');
            userEvent.click(button);

            const listitemsAfter = screen.getAllByRole('listitem');

            expect(listitemsAfter.length).toBe(listitemsBefore.length);
        });
        it('Renders comment with  role "guest" if role is guest', () => {
            render(<ChatBoxWrappedInContext isLoggedIn={false} />);

            const inputField = screen.getByRole('textbox');
            userEvent.type(inputField, 'Test message');

            const button = screen.getByRole('button');
            userEvent.click(button);

            const comments = screen.getAllByRole('listitem');

            const newComment = comments[comments.length - 1];

            expect(newComment).toHaveTextContent(/guest/i);
        });
        it('Renders comment with  role "admin" if role is admin', () => {
            render(<ChatBoxWrappedInContext isLoggedIn={true} />);

            const inputField = screen.getByRole('textbox');
            userEvent.type(inputField, 'Test message');

            const button = screen.getByRole('button');
            userEvent.click(button);

            const comments = screen.getAllByRole('listitem');

            const newComment = comments[comments.length - 1];

            expect(newComment).toHaveTextContent(/admin/i);
        });
    });
});
