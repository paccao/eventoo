import styled from 'styled-components';
import { Meeting } from '../../context/AppState';
import MeetupBtnsContainer from './MeetupBtnsContainer';

import TagChip from '../globals/TagChip';

interface Props {
    currentMeetup: Meeting;
}

function Meetup({ currentMeetup }: Props) {
    

    return (
        <MeetingContainer>
            <section
                role="img"
                className="landing"
                style={{ backgroundImage: `url(${currentMeetup && currentMeetup?.image})` }}
            >
                <h1>{currentMeetup?.title}</h1>
            </section>
            <section className="content-container">
                <section className="location-time">
                   <code>{ currentMeetup && currentMeetup?.time}</code> 
                    <h2>{currentMeetup?.location}</h2>
                    {currentMeetup?.tag.map((tag) => (
                        <TagChip key={currentMeetup.id} text={tag} />
                    ))}
                </section>
                <section className="interact-section">

                <MeetupBtnsContainer id={currentMeetup?.id} date={currentMeetup && currentMeetup.time} />
                </section>
            </section>
        </MeetingContainer>
    );
}

export default Meetup;

const MeetingContainer = styled.section`
    .landing {
        position: relative;
        min-height: 200px;
        background-size: cover;
        background-position: center;
        border-radius: ${(props) => props.theme.borderRadius};
        h1 {
            font-size: 2rem;
            position: absolute;
            bottom: 2rem;
            left: 2rem;
        }
    }

    .content-container {
        margin-top: 1rem;
        padding: 1rem;
        min-height: 200px;
        border-radius: ${(props) => props.theme.borderRadius};
        background-color: ${(props) => props.theme.cardBgColor};

        display: flex;
        justify-content: space-between;
    }
`;
