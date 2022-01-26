import styled from 'styled-components';

import { Link } from 'react-router-dom';
import TagChip from '../globals/TagChip';
import AttendingIndicator from '../globals/AttendingIndicator';
import { shortenLongStrings } from '../../helpers/shortenLongString';

import { isPassedDate } from '../../helpers/isPassedDate';

interface MeetUpListItemProps {
	id: string;
	image: string;
	location: string;
	tag: string[];
	time: string;
	title: string;
	isAttending: boolean;
}

export default function MeetUpListItem({
	image,
	location,
	tag,
	time,
	title,
	id,
	isAttending,
}: MeetUpListItemProps) {
	return (
		<MeetUpListItemContainer>
			<ListInfoContainer data-testid='list-info-container'>
				<Link to={`/meetup/${id}`}>
					<div className='inner-container'>
						<div className='details-container'>
							<h3>
								{time} {location}
							</h3>
							{isAttending && <AttendingIndicator />}
						</div>

						<div className='title-container'>
							<h2 title={title}>{shortenLongStrings(title, 13)}</h2>
						</div>

						<TagContainer className='tag-container'>
							{tag.map(tag => (
								<TagChip key={tag} text={tag} />
							))}
						</TagContainer>
					</div>
				</Link>
			</ListInfoContainer>

			<ListImageContainer
				className='image-container'
				role={'img'}
				style={{ backgroundImage: `url(${image})` }}
			></ListImageContainer>
		</MeetUpListItemContainer>
	);
}

const MeetUpListItemContainer = styled.li`
	:hover {
		opacity: 90%;
		transform: scale(1.005);
	}


    box-shadow: 0 1px 2px rgba(0,0,0,0.05), 
                0 2px 4px rgba(0,0,0,0.05), 
                0 4px 8px rgba(0,0,0,0.05), 
                0 8px 16px rgba(0,0,0,0.05),
                0 16px 32px rgba(0,0,0,0.05), 
                0 32px 64px rgba(0,0,0,0.05);



	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;

	height: 7.4rem;
	border-radius: 15px;

	h3 {
		opacity: ${props => props.theme.textLowEmpEmph};
	}

	h2 {
		opacity: ${props => props.theme.textHighEmph};
	}
`;

const ListImageContainer = styled.div`
	cursor: pointer;
	height: 7.4rem;
	width: 30%;
	background-position: center;
	background-size: cover;
	border-radius: 15px;
`;

const ListInfoContainer = styled.div`
	background-color: ${props => props.theme.cardBgColor};
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 70%;
	height: 100%;
	margin-right: 1rem;
	border-radius: 15px;
	cursor: pointer;
	padding: 2rem 1rem;

	.details-container {
		display: flex;
		justify-content: space-between;

		span {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.8rem;

			.star-icon {
				color: ${props => props.theme.accentColor};
			}
		}
	}
`;

const TagContainer = styled.ul`
	display: flex;
`;
