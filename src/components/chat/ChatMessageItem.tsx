import { Comment } from '../../context/AppState';
import styled from 'styled-components';

function ChatMessageItem({ id: _, time, content, role }: Comment) {
    function formatRole(role: string) {
        return role.charAt(0).toUpperCase() + role.slice(1);
    }

    function checkIfAdmin(): Boolean {
        if (role === 'admin') return true;
        else return false;
    }

    return (
        <ListItem isAdmin={checkIfAdmin()}>
            <time dateTime={time}>{time}</time>
            <p>{content}</p>
            <cite className={role}>{'/' + formatRole(role)}</cite>
        </ListItem>
    );
}

const ListItem = styled.li<{ isAdmin: Boolean }>`
    background-color: ${(props) =>
        props.isAdmin ? props.theme.accentColorOpaque : props.theme.accentColorOpaque};
    border-radius: ${(props) => props.theme.borderRadius};

    color: ${(props) => props.theme.textColor};
    font-style: normal;

    padding: 0.25rem 0.75rem;
    max-width: 80%;
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-self: ${(props) => (props.isAdmin ? 'start' : 'end')};

    time {
        opacity: ${(props) => props.theme.textMediumEmph};
        font-size: 0.75em;
    }

    p {
        opacity: ${(props) => props.theme.textHighEmph};
        font-size: 0.9em;
        font-weight: 800;
        margin: 0.1rem 0rem;
    }

    cite {
        opacity: ${(props) => (props.isAdmin ? '1' : props.theme.textMediumEmph)};
        color: ${(props) => (props.isAdmin ? props.theme.accentColorAdmin : 'inherits')};
        text-align: right;
        font-size: 0.85em;
    }

    time,
    p {
        text-align: start;
    }

    time,
    cite {
        font-weight: 400;
    }
`;

export default ChatMessageItem;
