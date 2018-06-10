import React from "react";


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input id="chat-message-input" autoFocus type="text" autoComplete="off" placeholder="Press Enter to Send"
                       value={props.value} onChange={props.handleChange} size="100"/>
        </form>
    )
};

export default MessageForm;