import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import MeetUpListItem from './MeetUpListItem';
import { Meeting } from '../../context/AppState';

import { isAttending } from '../../helpers/utils';

export default function MeetUpList() { 
	const { state } = useContext(AppContext);

	console.log(state);
	
	return (
		<ul>
			{state?.meetings?.map((meeting: Meeting) => (
				<MeetUpListItem key={meeting.id} isAttending={ isAttending(state?.user?.bookedMeetups, meeting.id) ? true : false } {...meeting} />
			))}
		</ul>
	);
}
