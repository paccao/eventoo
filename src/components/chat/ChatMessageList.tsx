import { useContext, useEffect, useState } from 'react';
import { AppContext, Comment, Meeting } from '../../context/AppState';
import { useParams } from 'react-router-dom';
import ChatMessageItem from './ChatMessageItem';
import styled from 'styled-components';

function ChatMessageList() {
    const { state } = useContext(AppContext);
    const { id } = useParams();
    const [currentMeeting, setCurrentMeeting] = useState<Meeting>();

    let currentMeetings: Meeting[];

    useEffect(() => {
        currentMeetings = state?.meetings?.filter((meeting) => meeting.id === id);

        setCurrentMeeting(currentMeetings[0]);
    }, []);

    return (
        <List data-testid="chatMessageList">
            {currentMeeting?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </List>
    );
}

const List = styled.ul`
    background-color: ${(props) => props.theme.cardBgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1.5rem 1rem;
    gap: 1rem;
`;
export default ChatMessageList;
