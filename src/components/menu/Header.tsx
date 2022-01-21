import React from 'react';
import styled from 'styled-components';
import ChangeRoleBtn from './ChangeRoleBtn';
//Context
import { useContext } from 'react';
import { AppContext } from '../../context/AppState';

function Header() {
    const { state } = useContext(AppContext);

    return (
        <HeaderContainer>
            <div className="logo-container">
                <h2 className="logo">eventoo.</h2>
                <h4 className="isAdmin">{state?.isAdmin ? 'Admin' : null}</h4>
            </div>
            <ChangeRoleBtn />
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    min-height: 120px;
    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container {
        display: flex;
        align-items: center;
    }

    .logo {
        color: ${(props) => props.theme.accentColor};
    }

    .isAdmin {
        color: ${(props) => props.theme.accentColorAdmin};
    }
`;
