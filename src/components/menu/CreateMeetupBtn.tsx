import { useContext } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
import { UiContext } from '../../context/UiState';

function CreateMeetupBtn() {
    const { dispatch } = useContext(UiContext);

    function toggleCreateMeetupModal() {
        dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' });
    }

    return (
        <CreateMeetupBtnContainer data-testid="create-meetup-btn" onClick={toggleCreateMeetupModal}>
            <MdAddCircleOutline />
        </CreateMeetupBtnContainer>
    );
}

export default CreateMeetupBtn;

const CreateMeetupBtnContainer = styled.button`
    color: ${(props) => props.theme.accentColorAdmin};
    font-size: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 10rem;
    top: 0rem;

`;
