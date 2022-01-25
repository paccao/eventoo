import { Comment } from '../../context/AppState';

function ChatMessageItem({ id, time, content, role }: Comment) {
    return (
        <li>
            <p>{role}</p>
        </li>
    );
}

export default ChatMessageItem;
