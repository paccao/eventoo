import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import { Meeting } from '../../context/AppState';

import TagChip from '../globals/TagChip';

interface MeetUpListItemProps {
	id: string;
	image: string;
	location: string;
	tag: string[];
	time: string;
	title: string;
}

export default function MeetUpListItem({
	image,
	location,
	tag,
	time,
	title,
	id,
}: MeetUpListItemProps) {
	console.log(image);

	return (
		<MeetUpListItemContainer>
			<header></header>

			<ListInfoContainer data-testid='list-info-container'>
				<Link to={`/meetup/${id}`}>
					<div className='inner-container'>
						<div className='details-container'>
							<h3>
								{time} {location}
							</h3>
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
				<Link to={`/meetup/${id}`}></Link>
			</ListImageContainer>
		</MeetUpListItemContainer>
	);
}

const MeetUpListItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;

	height: 10rem;
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
	height: 10rem;
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
	padding: 2rem;
`;
