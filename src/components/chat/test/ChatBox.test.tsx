import { render, screen } from '@testing-library/react';
import ChatBox from '../ChatBox';
import userEvent from '@testing-library/user-event';
import ChatMessageList from '../ChatMessageList';

import React, { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';
import { AppReducer } from '../../../context/AppReducer';
import { currentDatePlusOneYear, currentDatePlusOneHalfHour } from '../../../helpers/currentDate';

import { user, meetups } from '../../meetupList/test/mockData';
import { UiContext } from '../../../context/UiState';
import AppState, { AppContext } from '../../../context/AppState';

describe('ChatBox component', () => {
    // function MockAppState({ children }: React.PropsWithChildren<{}>) {
    //     const appInitialState = {
    //         meetings: meetups,
    //         user: user,
    //     };

    //     const [state, dispatch] = useReducer(AppReducer, appInitialState);

    //     return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
    // }

    it('renders without crashing', () => {
        render(<ChatBox />);
    });

    it('should render the info block divider', () => {
        render(<ChatBox />);
        const infoDivider = screen.getByText(/diskussion/i);
        expect(infoDivider).toBeInTheDocument();
    });

    it('should render the list of chat messages', () => {
        render(<ChatBox />);
        const listNode = screen.getByRole('list');
        expect(listNode).toBeInTheDocument();
    });

    it('should render the chat input field', () => {
        render(<ChatBox />);
        const inputBoxNode = screen.getByRole('textbox');
        expect(inputBoxNode).toBeInTheDocument();
    });

    it('should render the chat enter button', () => {
        render(<ChatBox />);
        const inputBoxNode = screen.getByRole('button');
        expect(inputBoxNode).toBeInTheDocument();
    });

    test("a new comment should be added to the meeting's list of comments on submit", () => {
        render(
            <AppState>
                <ChatBox />
            </AppState>,
        );

        const testInput = 'This is a test comment!';
        const textBoxInput = userEvent.type(screen.getByRole('textbox'), testInput);
        userEvent.click(screen.getByRole('button', { name: /SKICKA/ }));

        expect(screen.getByText(testInput)).toBeInTheDocument();
    });
});
