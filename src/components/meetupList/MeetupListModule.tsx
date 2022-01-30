import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import styled from 'styled-components';
import Search from '../globals/Search';

import MeetUpList from './MeetUpList';
import InfoBlockDivider from '../globals/InfoBlockDivider';
import SwitchComponent from '../globals/SwitchComponent';

import { isAttending } from '../../helpers/isAttending';

export default function MeetUpListModule() {
	const { state } = useContext(AppContext);
	const filteredByBooked = [...state?.meetings]?.filter(meeting =>
		isAttending(state?.user?.bookedMeetups, meeting.id)
	);

	return (
		<MeetupListModuleContainer>
					<Search/>
			<MeetUpList
				list={filteredByBooked}
				divider={<InfoBlockDivider text='Bokade meetups' toggle={<SwitchComponent />} />}
				user={state.user}
			/>

			<MeetUpList
				list={state.meetings}
				divider={<InfoBlockDivider text='alla meetups' />}
				user={state.user}
			/>
		</MeetupListModuleContainer>
	);
}

const MeetupListModuleContainer = styled.section`
	overflow-y: scroll;
	overflow-x: hidden;
	height: 80vh;

	-ms-overflow-style: none;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;
