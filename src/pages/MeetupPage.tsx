import ChatBox from '../components/chat/ChatBox';
import styled from 'styled-components';

function MeetupPage() {
    return (
        <PageWrapper>
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
