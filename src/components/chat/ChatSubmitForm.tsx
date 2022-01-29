import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { AppContext, Comment } from '../../context/AppState';
import { currentDate } from '../../helpers/currentDate';
import styled from 'styled-components';

function ChatSubmitForm({ urlId }: { urlId: string | undefined }) {
    const { state, dispatch } = useContext(AppContext);
    const [commentValue, setCommentValue] = useState<string>('');

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (!commentValue) return;

        const comment: Comment = {
            id: nanoid(),
            time: currentDate(),
            content: commentValue,
            role: state.user.isAdmin ? 'admin' : 'guest',
        };
        
        dispatch({ type: 'ADD_COMMENT', payload: { urlId, comment } });
        setCommentValue('');
    }

    console.log(state);
    

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="input-field" data-testid="label">
                Input
            </label>
            <input
                onChange={(e) => setCommentValue(e.target.value)}
                value={commentValue}
                name="input-field"
                id="input-field"
                placeholder="meddelande.."
            ></input>

            <button type="submit">SKICKA</button>
        </Form>
    );
}

export default ChatSubmitForm;

const Form = styled.form`
    display: grid;
    grid-template-columns: 0 3fr 1fr;

    label {
        visibility: hidden;
    }

    input {
        all: unset;
        background-color: ${(props) => props.theme.accentColorOpaque};
        padding: 0.75rem 1.5rem;
        border-radius: ${(props) => props.theme.borderRadius};
        margin-right: 0.8rem;
    }

    input::placeholder {
        color: ${(props) => props.theme.textColor};
        opacity: ${(props) => props.theme.textHighEmph};
    }

    button {
        all: unset;
        text-align: center;
        background-color: ${(props) => props.theme.accentColor};
        border-radius: ${(props) => props.theme.borderRadius};
        color: ${(props) => props.theme.textColorDark};
        font-weight: 800;
        cursor: pointer;
    }
`;
