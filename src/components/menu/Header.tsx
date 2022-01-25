import React from 'react';
import styled from 'styled-components';
//Context
import { useContext } from 'react';
import { UiContext } from '../../context/UiState';

import ChangeRoleBtn from './ChangeRoleBtn';
import CreateMeetupBtn from './CreateMeetupBtn';
import CreateMeetupModal from './CreateMeetupModal';

function Header() {
    const { state } = useContext(UiContext);

    return (
        <HeaderContainer>
            <div className="logo-container">
                <h2 className="logo">eventoo.</h2>
                <h4 className="isAdmin">{state?.isAdmin ? 'Admin' : null}</h4>
            </div>

            <div>{!state.showCreateMeetingModal && <ChangeRoleBtn />}</div>

            <div className="create-meetup-btn-container">
                {state.isAdmin && <CreateMeetupBtn />}
            </div>
            {state.showCreateMeetingModal && <CreateMeetupModal />}
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    min-height: 120px;
    padding: 2rem 2rem 0rem 2rem;

    display: flex;
    justify-content: space-between;

    .logo-container {
        display: flex;
        flex-direction: column;

        h4 {
            align-self: flex-end;
        }
    }

    .logo {
        color: ${(props) => props.theme.accentColor};
    }

    .isAdmin {
        color: ${(props) => props.theme.accentColorAdmin};
    }

    .create-meetup-btn-container {
        min-width: 50px;
    }
`;