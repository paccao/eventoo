import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchComponent() {
    const { state, dispatch } = useContext(UiContext);

    function onChangeHandler() {
        dispatch({ type: 'SET_IS_PASSED_MEETUPS' });
    }

    return (
        <FormControl component="fieldset" variant="standard">
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.isPassedMeetups}
                            onChange={onChangeHandler}
                            name="switch"
                        />
                    }
                    label={'Visa gamla meetups'}
                    labelPlacement="start"
                />
            </FormGroup>
        </FormControl>
    );
}
