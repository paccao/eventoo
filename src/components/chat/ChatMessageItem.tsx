import { Comment } from '../../context/AppState';
import styled from 'styled-components';

function ChatMessageItem({ id: _, time, content, role }: Comment) {
    return (
        <ListItem>
            <time dateTime={time}>{time}</time>
            <p>{content}</p>
            <p>{'/' + role}</p>
        </ListItem>
    );
}

const ListItem = styled.li``;

export default ChatMessageItem;
