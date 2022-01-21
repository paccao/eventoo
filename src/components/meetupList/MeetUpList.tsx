import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import MeetUpListItem from './MeetUpListItem';
import { Meeting } from '../../context/AppState';

export default function MeetUpList() {

    const { state } = useContext(AppContext)


    

  return <ul>{state.meetings?.map((meeting: Meeting) => <MeetUpListItem  key={meeting.id} {...meeting} />)}</ul>


}
