import { render, screen, within } from '@testing-library/react';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppState, { AppContext, Comment, Meeting } from '../../../context/AppState';
import { isAttending } from '../../../helpers/utils';
import ChatMessageList from '../ChatMessageList';
import { meetups as mockMeetups } from '../../../mockData';
import ChatMessageItem from '../ChatMessageItem';

describe('ChatMessageList component', () => {
    it('renders without crashing', () => {
        render(<ChatMessageList />);
    });

    function MockChatMessageList() {
        return (
            <ul data-testid="chatMessageList">
                {mockMeetups[0]?.comments?.map((comment: Comment) => (
                    <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
                ))}
            </ul>
        );
    }

    it('should render chat messages if there are any', () => {
        render(
            <AppState>
                <MockChatMessageList />
            </AppState>,
        );

        const listItem = screen.queryAllByRole('listitem');
        expect(listItem[0]).toBeInTheDocument();
    });
});
