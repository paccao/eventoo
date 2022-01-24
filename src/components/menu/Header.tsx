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
            <div>
                <ChangeRoleBtn />
            </div>
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
`;
