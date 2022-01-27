import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import { AppContext } from '../../context/AppState';
import CardButton from '../globals/CardButton';
import { isAttending } from '../../helpers/isAttending';

import { useParams } from 'react-router-dom';


export default function MeetupBtnsContainer() {
	const { state: uiState, dispatch: uiDispatch } = useContext(UiContext);
	const { state: appState, dispatch: appDispatch } = useContext(AppContext);

	const { id } = useParams();
	
	function editMeetupHandler() {}
	function attendMeetupHandler() {
		appDispatch({ type: 'ATTEND_MEETUP', payload: id })
	}

	
	return (
		<div>
 			{uiState.isAdmin && (
				<CardButton
					text='editera'
					isActive={isAttending(appState.user.bookedMeetups, id )}
					clickHandler={editMeetupHandler}
				/>
			)} 

				<CardButton
					text={isAttending(appState.user.bookedMeetups, id) ? 'deltar' : 'delta'}
					isActive={isAttending(appState.user.bookedMeetups, id)}
					clickHandler={attendMeetupHandler}
				/>
		</div>
	);
}
