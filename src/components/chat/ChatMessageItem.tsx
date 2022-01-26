import { Comment } from '../../context/AppState';
import styled from 'styled-components';

function ChatMessageItem({ id: _, time, content, role }: Comment) {
    function formatTime(unixTime: string) {
        const date = new Date(parseInt(unixTime) * 1000);

        let hours: string | number = date.getHours();
        if (hours.toString().length != 2) hours = '0' + hours;
        const minutes = '0' + date.getMinutes();
        const seconds = '0' + date.getSeconds();

        // Will display time in 10:30:23 format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    return (
        <ListItem>
            <time dateTime={time}>{formatTime(time)}</time>
            <p>{content}</p>
            <cite className={role}>{'/' + role}</cite>
        </ListItem>
    );
}

const ListItem = styled.li`
    font-style: normal;
    text-align: left;

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
