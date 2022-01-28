import { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import { Switch } from '@mui/material';

import styled from 'styled-components';

function ChangeRoleBtn() {
    const { dispatch } = useContext(UiContext);

    function changeRole(): void {
        dispatch({ type: 'TOGGLE_ROLE' });
    }

    return <BtnContainer onClick={changeRole}>Change Role</BtnContainer>;
}

export default ChangeRoleBtn;

const BtnContainer = styled.button`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.accentColor};
    padding: 10px;
    color: ${(props) => props.theme.textColorBlack};
    border: none;
    font-weight: bold;
    cursor: pointer;
`;
