import ChatMessageList from './ChatMessageList';
import ChatSubmitForm from './ChatSubmitForm';
import InfoBlockDivider from '../globals/InfoBlockDivider';

function ChatBox() {
    return (
        <div>
            <InfoBlockDivider text="Diskussion" />
            <ChatMessageList />
            <ChatSubmitForm />
        </div>
    );
}

export default ChatBox;
