import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppState';
import { MdOutlineLaptopMac } from 'react-icons/md';

function CreateMeetupModal() {
    const { dispatch } = useContext(AppContext);

    return (
        <CreateMeetupModalContainer>
            <form className="meeting-form">
                <div className="close-container">
                    <h2>lägg till meetup..</h2>{' '}
                    <div onClick={() => dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' })}> X</div>
                </div>
                <input type="text" id="title" name="title" placeholder="title:" />
                <input type="text" id="ämne" name="ämne" placeholder="ämne:" />
                <input type="text" id="bild" name="bild" placeholder="bild:" />
                <div className="place-container">
                    <input type="text" id="plats" name="plats" placeholder="plats:" />
                    <button className="location-button">
                        <MdOutlineLaptopMac />
                    </button>
                </div>

                <button className="submit-button" type="submit">
                    SKAPA
                </button>
            </form>
        </CreateMeetupModalContainer>
    );
}

export default CreateMeetupModal;

const CreateMeetupModalContainer = styled.section`
    position: fixed;
    inset: 120px 0 0 0;
    background-color: ${(props) => props.theme.__bgColorLargePageWidth};
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .meeting-form {
        width: 100%;
        max-width: 250px;
        display: flex;
        flex-direction: column;

        .close-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;

            div {
                color: ${(props) => props.theme.accentColorAdmin};
                font-size: 1.2rem;
                font-weight: bold;
            }
        }

        input {
            margin-bottom: 1.5rem;
            border-radius: ${(props) => props.theme.borderRadius};
            border: none;
            padding: 10px;
            background-color: ${(props) => props.theme.cardBgColor};
            /* color: ${(props) => props.theme.textColor}; */
            color: white;
        }

        input::placeholder {
            /* color: ${(props) => props.theme.textColor}; */
            color: white;
        }

        .submit-button {
            border-radius: ${(props) => props.theme.borderRadius};
            border: none;
            padding: 7px;
            background-color: ${(props) => props.theme.accentColorAdmin};
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .place-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .location-button {
            background-color: ${(props) => props.theme.cardBgColor};
            border-radius: ${(props) => props.theme.borderRadius};
            color: ${(props) => props.theme.accentColorAdmin};
            font-size: 1rem;
            border: none;
            padding: 0.55rem;
        }
    }
`;
