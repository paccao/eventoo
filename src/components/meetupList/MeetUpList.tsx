import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import { Meeting } from '../../context/AppState';
import { isAttending } from '../../helpers/isAttending';
import SwitchComponent from '../globals/SwitchComponent';
import styled from 'styled-components';

import MeetUpListItem from './MeetUpListItem';
import InfoBlockDivider from '../globals/InfoBlockDivider';
import { stat } from 'fs';

export default function MeetUpList() {
	const { state } = useContext(AppContext);

	const filteredByBooked = [...state?.meetings]?.filter((meeting) => isAttending(state?.user?.bookedMeetups, meeting.id))

	return (
		<>
			<ul data-testid='booked-meetups' >
				<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />}/>
				{filteredByBooked.map((meeting: Meeting) => (
					<MeetUpListItem
						key={meeting.id}
						isAttending={ isAttending(state?.user?.bookedMeetups, meeting.id) ? true : false }
						{...meeting}
					/>
				))}
			</ul>
			
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


