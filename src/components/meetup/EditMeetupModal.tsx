import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UiContext } from '../../context/UiState';
import { AppContext } from '../../context/AppState';
import { MdOutlineLaptopMac } from 'react-icons/md';

import { Meeting } from '../../context/AppState';

import { useNavigate } from 'react-router-dom';

interface Props {
    currentMeetup: Meeting;
}

function EditMeetupModal({ currentMeetup }: Props) {
    const navigate = useNavigate();

    const dateTimeArr = currentMeetup?.time.split(' ');

    const today = new Date().toLocaleDateString('sv-se');

    const { dispatch } = useContext(UiContext);
    const { dispatch: appDispatch } = useContext(AppContext);

    const [title, setTitle] = useState<string>(currentMeetup?.title);
    const [tag, setTag] = useState<string>(currentMeetup?.tag[0]);
    const [image, setImage] = useState<string>(currentMeetup?.image);
    const [location, setLocation] = useState<string>(currentMeetup?.location);
    const [date, setDate] = useState<string>(dateTimeArr[0]);
    const [time, setTime] = useState<string>(dateTimeArr[1]);
    const [isOnline, setIsOnline] = useState<boolean>(false);

    //Togles value of location input value when isOnline button is pressed
    useEffect(() => {
        isOnline && setLocation('online');
    }, [isOnline]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!title || !tag || !image || !location || !date || !time) {
            return;
        }

        const dateAndTime = date + ' ' + time;

        const meeting: Meeting = {
            description: 'Test description',
            id: currentMeetup.id,
            title,
            tag: [tag],
            time: dateAndTime,
            isOnline,
            location,
            image,
            timeStamp: Date.parse(dateAndTime),
            comments: currentMeetup.comments,
        };

        appDispatch({ type: 'UPDATE_MEETUP', payload: meeting });
        dispatch({ type: 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL' });
    }

    function handleDelete() {
        console.log('click');
        appDispatch({ type: 'DELETE_MEETUP', payload: currentMeetup });
        dispatch({ type: 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL' });
        navigate('/');
    }

    return (
        <EditMeetupModalContainer>
            <form onSubmit={handleSubmit} className="meeting-form">
                <div className="close-container">
                    <h2>Ändra meetup..</h2>{' '}
                    <div
                        className="x"
                        onClick={() => dispatch({ type: 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL' })}
                    >
                        {' '}
                        X
                    </div>
                </div>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="titel:"
                    required
                />
                <input
                    onChange={(e) => setTag(e.target.value)}
                    value={tag}
                    type="text"
                    id="ämne"
                    name="ämne"
                    placeholder="ämne:"
                    required
                />
                <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    type="text"
                    id="bild"
                    name="bild"
                    placeholder="bild:"
                    required
                />
                <div className="date-time-container">
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        type="date"
                        id="date"
                        name="date"
                        placeholder="date:"
                        min={today}
                        required
                    />
                    <input
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                        type="time"
                        id="time"
                        name="time"
                        placeholder="time:"
                        required
                    />
                </div>
                <div className="place-container">
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        type="text"
                        id="plats"
                        name="plats"
                        placeholder="plats:"
                        required
                        disabled={isOnline}
                    />
                    <button
                        onClick={() => setIsOnline(!isOnline)}
                        type="button"
                        className={`isOnline-button ${isOnline ? 'online' : null}`}
                    >
                        <MdOutlineLaptopMac />
                    </button>
                </div>
                <div className="btn-container">
                    <button className="button" type="submit">
                        UPPDATERA
                    </button>
                    <button onClick={handleDelete} type="button" className="button button-delete">
                        RADERA
                    </button>
                </div>
            </form>
        </EditMeetupModalContainer>
    );
}

export default EditMeetupModal;

const EditMeetupModalContainer = styled.section`
    padding-top: 100px;
    position: fixed;
    inset: 0 0 0 0;
    background-color: ${(props) => props.theme.__bgColorLargePageWidth};
    opacity: 0.95;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .meeting-form {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;

        .close-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;

            .x {
                color: ${(props) => props.theme.accentColorAdmin};
                font-size: 1.2rem;
                font-weight: bold;
            }

            .x:hover {
                font-size: 1.3rem;
                cursor: pointer;
            }
        }

        input {
            margin-bottom: 1.5rem;
            border-radius: ${(props) => props.theme.borderRadius};
            border: none;
            padding: 10px;
            background-color: ${(props) => props.theme.cardBgColor};
            color: ${(props) => props.theme.textColor};
        }

        input::placeholder {
            color: ${(props) => props.theme.textColor};
        }

        .btn-container {
            display: flex;
            justify-content: space-around;
        }

        .button {
            border-radius: ${(props) => props.theme.borderRadius};
            border: none;
            padding: 7px;
            background-color: ${(props) => props.theme.accentColorAdmin};
            font-size: 1.4rem;
            font-weight: bold;
        }

        .button-delete {
            background-color: red;
            color: ${(props) => props.theme.textColor};
        }
    }

    .place-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .isOnline-button {
            background-color: ${(props) => props.theme.cardBgColor};
            border-radius: ${(props) => props.theme.borderRadius};
            color: ${(props) => props.theme.accentColorAdmin};
            font-size: 1rem;
            border: none;
            padding: 0.55rem;
        }

        .online {
            background-color: ${(props) => props.theme.accentColorAdmin};
            color: ${(props) => props.theme.cardBgColor};
        }
    }

    .date-time-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;
