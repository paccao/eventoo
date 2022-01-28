import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext, Comment } from '../../context/AppState';
import { currentDate } from '../../helpers/currentDate';

function ChatSubmitForm() {
    const { state, dispatch } = useContext(AppContext);
    const { id: urlId } = useParams();
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

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    );
}

export default ChatSubmitForm;
