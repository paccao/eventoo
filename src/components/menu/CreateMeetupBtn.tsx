import { useContext } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import styled from 'styled-components';
import { AppContext } from '../../context/AppState';

function CreateMeetupBtn() {
    const { state, dispatch } = useContext(AppContext);

    function toggleCreateMeetupModal() {
        console.log('hej');

        dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' });

        console.log(state.showCreateMeetingModal);
    }

    return (
        <CreateMeetupBtnContainer onClick={toggleCreateMeetupModal}>
            <MdOutlineAddCircle data-testid="create-meetup-btn" />
        </CreateMeetupBtnContainer>
    );
}

export default CreateMeetupBtn;

const CreateMeetupBtnContainer = styled.button`
    color: ${(props) => props.theme.accentColorAdmin};
    font-size: 2rem;
    background-color: ${(props) => props.theme.__bgColorLargePageWidth};
    border: none;
`;
