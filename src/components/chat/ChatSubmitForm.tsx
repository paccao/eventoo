import React, { useRef } from 'react';
import { MutableRefObject } from 'react';

function ChatSubmitForm() {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const inputElem = inputRef.current;
        const inputValue = inputElem.value;

        inputElem.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input-field" data-testid="label">
                Input
            </label>
            <input
                ref={inputRef}
                name="input-field"
                id="input-field"
                placeholder="meddelande.."
            ></input>

            <button type="submit">SKICKA</button>
        </form>
    );
}

export default ChatSubmitForm;
