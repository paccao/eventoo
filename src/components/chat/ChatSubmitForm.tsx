function ChatSubmitForm() {
    return (
        <form>
            <label htmlFor="input-field">Input</label>
            <input name="input-field" id="input-field" placeholder="meddelande.."></input>

            <button>SKICKA</button>
        </form>
    );
}

export default ChatSubmitForm;
