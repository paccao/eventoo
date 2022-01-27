import { useContext } from 'react';
import { AppContext, Comment } from '../../context/AppState';
import { useParams } from 'react-router-dom';
import ChatMessageItem from './ChatMessageItem';
import styled from 'styled-components';

function ChatMessageList() {
    const { state } = useContext(AppContext);
    const { id } = useParams();
    const currentMeeting = [...state?.meetings]?.filter((meeting) => meeting.id === id)[0];

    return (
        <List data-testid="chatMessageList">
            {currentMeeting?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </List>
    );
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;

    background-color: ${(props) => props.theme.cardBgColor};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1em 1rem;
`;
export default ChatMessageList;
