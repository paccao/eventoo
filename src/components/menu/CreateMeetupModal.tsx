import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UiContext } from '../../context/UiState';
import { AppContext } from '../../context/AppState';
import { MdOutlineLaptopMac } from 'react-icons/md';
import { currentDatePlusOneYear } from '../../helpers/currentDate';

import { Meeting } from '../../context/AppState';
import { nanoid } from 'nanoid';

function CreateMeetupModal() {
    const today = new Date().toLocaleDateString('sv-se');

    const { dispatch } = useContext(UiContext);
    const { dispatch: appDispatch } = useContext(AppContext);

    const [title, setTitle] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [date, setDate] = useState<string>(currentDatePlusOneYear(false));
    const [time, setTime] = useState<string>('18:00');
    const [location, setLocation] = useState<string>('');
    const [isOnline, setIsOnline] = useState<boolean>(false);

    //Togles value of location input value when isOnline button is pressed
    useEffect(() => {
        isOnline ? setLocation('online') : setLocation('');
    }, [isOnline]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!title || !tag || !image || !location || !date || !time) {
            return;
        }

        const dateAndTime = date + ' ' + time;

        const meeting: Meeting = {
            id: nanoid(),
            title,
            tag: [tag],
            time: dateAndTime,
            isOnline,
            location,
            image,
            timeStamp: Date.parse(dateAndTime),
            comments: [],
        };

        appDispatch({ type: 'ADD_MEETUP', payload: meeting });
        dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' });

        setLocation('');
    }

    return (
        <CreateMeetupModalContainer>
            <form onSubmit={handleSubmit} className="meeting-form">
                <div className="close-container">
                    <h2>lägg till meetup..</h2>{' '}
                    <div
                        className="x"
                        onClick={() => dispatch({ type: 'TOGGLE_CREATE_MEETING_MODAL' })}
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

                <button className="submit-button" type="submit">
                    SKAPA
                </button>
            </form>
        </CreateMeetupModalContainer>
    );
}

export default CreateMeetupModal;

const CreateMeetupModalContainer = styled.section`
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

        .submit-button {
            border-radius: ${(props) => props.theme.borderRadius};
            border: none;
            padding: 7px;
            background-color: ${(props) => props.theme.accentColorAdmin};
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
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
            cursor: pointer;
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
