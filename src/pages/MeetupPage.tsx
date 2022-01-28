import ChatBox from '../components/chat/ChatBox';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Meetup from '../components/meetup/Meetup';
import { AppContext } from '../context/AppState';
import { useContext } from 'react';

function MeetupPage() {
    const { id } = useParams();
    

    const { state } = useContext(AppContext);

    const currentMeetup = state?.meetings?.filter((meeting) => meeting.id === id)[0];

    return (
        <PageWrapper>
            <Meetup currentMeetup={currentMeetup} />
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
