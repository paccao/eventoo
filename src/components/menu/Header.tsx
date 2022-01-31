import styled from 'styled-components';
//Context
import { useContext } from 'react';
import { UiContext } from '../../context/UiState';

import ChangeRoleBtn from './ChangeRoleBtn';
import CreateMeetupBtn from './CreateMeetupBtn';
import CreateMeetupModal from './CreateMeetupModal';

import { Link } from 'react-router-dom';

function Header() {
	const { state } = useContext(UiContext);

	return (
		<HeaderContainer>
			<div className='logo-container'>
				<Link to='/'>
					<h2 className='logo'>eventoo.</h2>{' '}
				</Link>
				<h4 className='isAdmin'>{state?.isAdmin ? 'Admin' : null}</h4>
			</div>

			<div className='create-meetup-btn-container'>
                {state.isAdmin && <CreateMeetupBtn />}
				<div>{!state.showCreateMeetingModal && <ChangeRoleBtn />}</div>
			</div>
			{state.showCreateMeetingModal && <CreateMeetupModal />}
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	min-height: 80px;
	padding: 0rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.left-tools-container {
		position: relative;
	}

	.logo-container {
		display: flex;
		flex-direction: column;

		h4 {
			align-self: flex-end;
			font-size: 0.7rem;
			position: absolute;
			top: 3rem;
		}
	}

	.logo {
		color: ${props => props.theme.accentColor};
	}

	.isAdmin {
		color: ${props => props.theme.accentColorAdmin};
	}

	.create-meetup-btn-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
