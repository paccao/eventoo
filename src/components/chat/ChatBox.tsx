import ChatMessageList from './ChatMessageList';
import ChatSubmitForm from './ChatSubmitForm';
import InfoBlockDivider from '../globals/InfoBlockDivider';
import styled from 'styled-components';
import { AppContext } from '../../context/AppState';
import { UiContext } from '../../context/UiState';
import { useContext } from 'react';
import { isAttending } from '../../helpers/isAttending';

function ChatBox({ urlId }: { urlId: string | undefined }) {
    const { state } = useContext(AppContext);
    const { state: uiState } = useContext(UiContext);

    const currentMeetup = state?.meetings?.filter((meetup) =>  meetup.id === urlId )[0]

    return (
        <Wrapper>
            <InfoBlockDivider text="Diskussion" />
            <ChatMessageList urlId={urlId} currentMeetup={currentMeetup} />
            {isAttending(state.user.bookedMeetups, currentMeetup?.id) || uiState.isAdmin ? (
                <ChatSubmitForm urlId={urlId} />
            ) : null}
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
