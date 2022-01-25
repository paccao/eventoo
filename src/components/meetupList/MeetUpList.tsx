import React, { useContext, ReactChild } from 'react';
import { Meeting, User } from '../../context/AppState';
import { isAttending } from '../../helpers/isAttending';

import styled from 'styled-components';

import MeetUpListItem from './MeetUpListItem';

interface MeetUpListProps {
	list: Meeting[];
	divider: ReactChild;
	user: User;
}

export default function MeetUpList({ list, divider, user }: MeetUpListProps) {

	return (
		<ul>
			{list.length < 1 && <PlaceholderMessage>No meetups found</PlaceholderMessage>}
			{divider}
			{list.map((meeting: Meeting) => (
				<MeetUpListItem
					key={meeting.id}
					isAttending={isAttending(user.bookedMeetups, meeting.id) ? true : false}
					{...meeting}
				/>
			))}
		</ul>
	);
}



const PlaceholderMessage = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.textColor};
	opacity: ${props => props.theme.textLowEmpEmph};
	width: 100%;
	height: 10rem;
`;
