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
	testId?: string;
}

export default function MeetUpList({ list, divider, user, testId }: MeetUpListProps) {
	const { state } = useContext(UiContext);
	const [activeList, setActiveList] = useState<Meeting[]>([]);

	useEffect(() => {
		const ascendingList = [...list]

			.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
			.filter(meetup => {
				if (meetup.tag.find(tag => tag.includes(state.searchString.toLowerCase()))) {
					return meetup;
				} else {
					return null; 
				}
			});

		if (state.isPassedMeetups) {
			setActiveList([...ascendingList].filter(meetup => isPassedDate(meetup.time)));
		} else {
			setActiveList([...ascendingList].filter(meetup => !isPassedDate(meetup.time)));
		}
	}, [list, state]);

	return (
		<ListContainer data-testid={testId}>
			{list.length < 1 && <PlaceholderMessage>Inga meetups här</PlaceholderMessage>}
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
	margin-bottom: 1rem;
`;

const PlaceholderMessage = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.textColor};
	opacity: ${props => props.theme.textLowEmpEmph};
	width: 100%;
	height: 3rem;
`;
