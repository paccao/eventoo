import { useContext } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
import { AppContext } from '../../context/AppState';

function CreateMeetupBtn() {
    const { state, dispatch } = useContext(AppContext);

    function toggleCreateMeetupModal() {
        dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' });

        console.log(state.showCreateMeetingModal);
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
    background-color: ${(props) => props.theme.__bgColorLargePageWidth};
    border: none;
`;
