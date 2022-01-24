import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function SwitchComponent() {
	const { state, dispatch } = useContext(AppContext);

	function onChangeHandler() {
		dispatch({ type: 'SET_IS_PASSED_MEETUPS' });
	}

	return (
    <FormControl component="fieldset" variant="standard">
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={state.isPassedMeetups} onChange={onChangeHandler} name="gilad" />}
        label={state.isPassedMeetups ? 'Visa tidigare' : 'Visa kommande'}
        labelPlacement='start'
      />
    
    </FormGroup>
  </FormControl>
	);
}

