import ChatMessageList from './ChatMessageList';
import ChatSubmitForm from './ChatSubmitForm';
import InfoBlockDivider from '../globals/InfoBlockDivider';
import styled from 'styled-components';

function ChatBox() {
    return (
        <Wrapper>
            <InfoBlockDivider text="Diskussion" />
            <ChatMessageList />
            <ChatSubmitForm />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    > :not(:first-child) {
        margin-left: 1rem;
    }
`;

export default ChatBox;
