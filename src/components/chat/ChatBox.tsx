import ChatMessageList from './ChatMessageList';
import ChatSubmitForm from './ChatSubmitForm';

function ChatBox() {
    return (
        <div>
            <ChatMessageList />
            <ChatSubmitForm />
        </div>
    );
}

export default ChatBox;
