import styled from 'styled-components';
import { Meeting } from '../../context/AppState';
import MeetupBtnsContainer from './MeetupBtnsContainer';
import { nanoid } from 'nanoid';

import TagChip from '../globals/TagChip';
import EditMeetupModal from './EditMeetupModal';
import { useContext, useEffect, useState } from 'react';
import { UiContext } from '../../context/UiState';

import { isImage } from '../../helpers/isImage';

const placeHolderUrl =
	'https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

interface Props {
	currentMeetup: Meeting;
}

function Meetup({ currentMeetup }: Props) {
	const { state } = useContext(UiContext);
	const [isPlaceholderImage, setIsPlaceholderImage] = useState(false);

	useEffect(() => {
		async function checkIfImage() {
			const res = await isImage(currentMeetup && currentMeetup?.image);
			setIsPlaceholderImage(res);
		}
		checkIfImage();
	});

	return (
		<MeetingContainer>
			<section
				role='img'
				className='landing'
				style={{
					backgroundImage: `url(${
						!isPlaceholderImage ? placeHolderUrl : currentMeetup && currentMeetup?.image
					})`,
				}}
			>
				<h1>{currentMeetup?.title}</h1>
			</section>
			<section className='content-container'>
				<TopFlexContainer>
					<section className='location-time'>
						<div>
							<code>{currentMeetup && currentMeetup?.time}</code>
							<h2>{currentMeetup?.location}</h2>
							<MeetupTagsContainer>
								{currentMeetup?.tag.map(tag => (
									<TagChip key={nanoid()} text={tag} />
								))}
							</MeetupTagsContainer>
						</div>
					</section>

					<section className='interact-section'>
						<MeetupBtnsContainer
							id={currentMeetup?.id}
							date={currentMeetup && currentMeetup.time}
						/>
					</section>
				</TopFlexContainer>

				<section>
					<p>{currentMeetup && currentMeetup.description}</p>
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
		border-radius: ${props => props.theme.borderRadius};
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
		border-radius: ${props => props.theme.borderRadius};
		background-color: ${props => props.theme.cardBgColor};

		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
`;

const MeetupTagsContainer = styled.div`
	display: flex;
`;

const TopFlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
