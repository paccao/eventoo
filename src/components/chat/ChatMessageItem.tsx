import { Comment } from '../../context/AppState';
import styled, { ThemeConsumer } from 'styled-components';

function ChatMessageItem({ id: _, time, content, role }: Comment) {
    return (
        <ListItem>
            <time dateTime={time}>{time}</time>
            <p>{content}</p>
            <cite className={role}>{'/' + role}</cite>
        </ListItem>
    );
}

const ListItem = styled.li`
    font-family: Inter;
    font-style: normal;
    letter-spacing: -0.05em;
    text-align: left;

    time {
        opacity: ${(props) => props.theme.textLowEmpEmph};
        font-size: 7px;
        font-weight: 400;
        line-height: 8px;
    }

    p {
        opacity: ${(props) => props.theme.textHighEmph};
        font-size: 9px;
        font-weight: 800;
        line-height: 11px;
    }

    cite {
        opacity: ${(props) => props.theme.textMediumEmph};
        font-size: 7px;
        font-weight: 400;
        line-height: 8px;
    }
`;

export default ChatMessageItem;
