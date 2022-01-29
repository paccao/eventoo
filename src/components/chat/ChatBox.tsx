import ChatMessageList from './ChatMessageList';
import ChatSubmitForm from './ChatSubmitForm';
import InfoBlockDivider from '../globals/InfoBlockDivider';
import styled from 'styled-components';
import { AppContext, Meeting } from '../../context/AppState';
import { useContext } from 'react';
import { isAttending } from '../../helpers/isAttending';

function ChatBox({ urlId, currentMeetup }: { urlId: string | undefined; currentMeetup: Meeting }) {
    const { state } = useContext(AppContext);
    return (
        <Wrapper>
            <InfoBlockDivider text="Diskussion" />
            <ChatMessageList urlId={urlId} currentMeetup={currentMeetup} />
            {isAttending(state.user.bookedMeetups, currentMeetup?.id) && (
                <ChatSubmitForm urlId={urlId} />
            )}
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
