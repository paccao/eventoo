import { Comment, Meeting } from '../../context/AppState';
import ChatMessageItem from './ChatMessageItem';
import styled from 'styled-components';

function ChatMessageList({
    urlId: _,
    currentMeetup,
}: {
    urlId: string | undefined;
    currentMeetup: Meeting;
}) {
    return (
        <List data-testid="chatMessageList">
            {currentMeetup?.comments?.length < 1 && (
                <p>No comments found. Be the first to write a comment!</p>
            )}
            {currentMeetup?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </List>
    );
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-height: 25vh;
    overflow-y: scroll;

    background-color: ${(props) => props.theme.cardBgColor};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1rem;
`;
export default ChatMessageList;
