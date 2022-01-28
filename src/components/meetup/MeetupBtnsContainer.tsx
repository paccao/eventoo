import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import { AppContext } from '../../context/AppState';
import CardButton from '../globals/CardButton';
import { isAttending } from '../../helpers/isAttending';
import { isTooLateToAttend } from '../../helpers/isTooLateToAttend';

export default function MeetupBtnsContainer({ id, date }: { id: string; date: string }) {
    const { state: uiState, dispatch } = useContext(UiContext);
    const { state: appState, dispatch: appDispatch } = useContext(AppContext);

    function editMeetupHandler() {
        dispatch({ type: 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL' });
    }
    function attendMeetupHandler() {
        appDispatch({ type: 'ATTEND_MEETUP', payload: id });
    }

    return (
        <div>
            {uiState.isAdmin && (
                <CardButton
                    isSelected={isAttending(appState.user.bookedMeetups, id)}
                    text="editera"
                    isActive={isTooLateToAttend(date)}
                    clickHandler={editMeetupHandler}
                />
            )}
            <CardButton
                isSelected={isAttending(appState.user.bookedMeetups, id)}
                text={isAttending(appState.user.bookedMeetups, id) ? 'deltar' : 'delta'}
                isActive={isTooLateToAttend(date)}
                clickHandler={attendMeetupHandler}
            />
        </div>
    );
}
