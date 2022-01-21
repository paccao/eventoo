import { useContext } from 'react';
import { APP_STATE_ACTIONS } from '../../context/AppReducer';
import { AppContext } from '../../context/AppState';

import styled from 'styled-components';

function ChangeRoleBtn() {
    const { dispatch } = useContext(AppContext);

    function changeRole(): void {
        dispatch({ type: APP_STATE_ACTIONS.TOGGLE_ROLE });
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
`;
