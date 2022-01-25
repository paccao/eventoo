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

    it("should render no list items when there aren't any", () => {
        render(
            <AppState>
                <ChatMessageList />
            </AppState>,
        );

        const listItem = screen.queryAllByRole('listitem');
        expect(listItem[0]).toBeUndefined();
    });
});
