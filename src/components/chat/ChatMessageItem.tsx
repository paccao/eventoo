import { Comment } from '../../context/AppState';
import styled from 'styled-components';

function ChatMessageItem({ id: _, time, content, role }: Comment) {
    function formatTime(unixTime: string) {
        const date = new Date(parseInt(unixTime) * 1000);

        let hours: string | number = date.getHours();
        if (hours.toString().length != 2) hours = '0' + hours;
        const minutes = '0' + date.getMinutes();
        const seconds = '0' + date.getSeconds();

        // 19 januari kl.16:04
        // Will display time in 10:30:23 format
        return hours + ':' + minutes.slice(1) + ':' + seconds.slice(1);
    }

    function formatRole(role: string) {
        return role.charAt(0).toUpperCase() + role.slice(1);
    }

    function checkIfAdmin() {
        if (role === 'admin') return true;
        else return false;
    }

    return (
        <ListItem isAdmin={checkIfAdmin()}>
            <time dateTime={time}>{formatTime(time)}</time>
            <p>{content}</p>
            <cite className={role}>{'/' + formatRole(role)}</cite>
        </ListItem>
    );
}

const ListItem = styled.li<{ isAdmin: Boolean }>`
    font-style: normal;
    text-align: left;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) =>
        props.isAdmin ? props.theme.accentColorAdmin : props.theme.bgColor};

    time {
        opacity: ${(props) => props.theme.textLowEmpEmph};
        font-size: 0.9em;
    }

    p {
        opacity: ${(props) => props.theme.textHighEmph};
        font-size: 1em;
        font-weight: 800;
        line-height: 11px;
    }

    cite {
        opacity: ${(props) => props.theme.textMediumEmph};
        font-size: 1em;
    }

    time,
    cite {
        font-weight: 400;
        line-height: 8px;
    }
`;

export default ChatMessageItem;
