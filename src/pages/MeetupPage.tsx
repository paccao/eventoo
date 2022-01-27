import ChatBox from '../components/chat/ChatBox';
import styled from 'styled-components';
import MeetupBtnsContainer from '../components/meetup/MeetupBtnsContainer';

function MeetupPage() {
    return (
        <PageWrapper>
            <MeetupBtnsContainer />
            <ChatBox />
        </PageWrapper>
    );
}

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

export default MeetupPage;
