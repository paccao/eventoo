import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import TagChip from '../globals/TagChip';

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
							{isAttending && (
								<span>
									Attending <AiOutlineStar className='star-icon' />
								</span>
							)}
						</div>

						<div className='title-container'>
							<h2>{title}</h2>
						</div>

						<ul className='tag-container'>
							{tag.map(tag => (
								<TagChip key={tag} text={tag} />
							))}
						</ul>
					</div>
				</Link>
			</ListInfoContainer>

			<ListImageContainer
				className='image-container'
				role={'img'}
				style={{ backgroundImage: `url(${image})` }}
			>
			</ListImageContainer>
		</MeetUpListItemContainer>
	);
}

const MeetUpListItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;

	height: 5.4rem;
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
	height: 5.4rem;
	width: 20%;
	background-position: center;
	background-size: cover;
	border-radius: 15px;
`;

const ListInfoContainer = styled.div`
	background-color: ${props => props.theme.cardBgColor};
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 80%;
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
