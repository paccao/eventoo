import React, { useContext, ReactChild } from 'react';
import { AppContext } from '../../context/AppState';
import { Meeting, User } from '../../context/AppState';
import { isAttending } from '../../helpers/isAttending';

import MeetUpListItem from './MeetUpListItem';


interface MeetUpListProps {
	list: Meeting[];
	divider: ReactChild;
	user: User
}

export default function MeetUpList({ list, divider, user }: MeetUpListProps) {

	const { state } = useContext(AppContext);


	return (
		<ul>
			{list.length < 1 && <h2>No meetups found</h2> }
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
