import styled from 'styled-components';
import { Meeting } from '../../context/AppState';
import MeetupBtnsContainer from './MeetupBtnsContainer';
import { nanoid } from 'nanoid';

import TagChip from '../globals/TagChip';
import EditMeetupModal from './EditMeetupModal';
import { useContext } from 'react';
import { UiContext } from '../../context/UiState';

interface Props {
    currentMeetup: Meeting;
}

function Meetup({ currentMeetup }: Props) {
    const { state } = useContext(UiContext);

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
                    <code>{currentMeetup && currentMeetup?.time}</code>
                    <h2>{currentMeetup?.location}</h2>
                    <MeetupTagsContainer>
                        {currentMeetup?.tag.map((tag) => (
                            <TagChip key={nanoid()} text={tag} />
                        ))}
                    </MeetupTagsContainer>
                </section>
                <section className="interact-section">
                    <MeetupBtnsContainer
                        id={currentMeetup?.id}
                        date={currentMeetup && currentMeetup.time}
                    />
                </section>
            </section>
            {state.showEditDeleteModal && <EditMeetupModal currentMeetup={currentMeetup} />}
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

const MeetupTagsContainer = styled.div`
    display: flex;
`;
