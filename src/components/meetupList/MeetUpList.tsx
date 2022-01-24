import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import { Meeting } from '../../context/AppState';
import { isAttending } from '../../helpers/utils';

import MeetUpListItem from './MeetUpListItem';
import InfoBlockDivider from '../globals/InfoBlockDivider';

export default function MeetUpList() {
	const { state } = useContext(AppContext);

	console.log(state);

	return (
		<>
			<ul>
				<InfoBlockDivider text='Alla meetups' />
				{state?.meetings?.map((meeting: Meeting) => (
					<MeetUpListItem
						key={meeting.id}
						isAttending={ isAttending(state?.user?.bookedMeetups, meeting.id) ? true : false }
						{...meeting}
					/>
				))}
			</ul>
		</>
	);
}
