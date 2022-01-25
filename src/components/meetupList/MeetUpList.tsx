import React, { useContext, ReactChild, useState, useEffect } from 'react';
import { Meeting, User } from '../../context/AppState';
import { isAttending } from '../../helpers/isAttending';
import { UiContext } from '../../context/UiState';

import { isPassedDate } from '../../helpers/isPassedDate';

import styled from 'styled-components';

import MeetUpListItem from './MeetUpListItem';


interface MeetUpListProps {
	list: Meeting[];
	divider: ReactChild;
	user: User;
}

export default function MeetUpList({ list, divider, user }: MeetUpListProps) {

	const { state } = useContext(UiContext)
	const [ activeList, setActiveList ] = useState<Meeting[]>([])

	useEffect(() => {

		const ascendingList = [...list].sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
		

		if (state.isPassedMeetups) {
			setActiveList([...ascendingList].filter(meetup => isPassedDate(meetup.time)))
		} else {
			setActiveList([...ascendingList].filter(meetup => !isPassedDate(meetup.time)))
		}

	}, [ list, state ])


	return (
		<ListContainer>
			{list.length < 1 && <PlaceholderMessage>No meetups found</PlaceholderMessage>}
			{divider}
			{activeList?.map((meeting: Meeting) => (
				<MeetUpListItem
					key={meeting.id}
					isAttending={isAttending(user.bookedMeetups, meeting.id) ? true : false}
					{...meeting}
				/>
			))}
		</ListContainer>
	);
}

const ListContainer = styled.ul`
	margin: 3rem 0rem;
	
`;

const PlaceholderMessage = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.textColor};
	opacity: ${props => props.theme.textLowEmpEmph};
	width: 100%;
	height: 10rem;
`;
