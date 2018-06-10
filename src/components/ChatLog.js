import ReactDOM from "react-dom";
import React from "react";

import {Message} from "./";

class ChatLog extends React.Component {

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(this.messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    render() {
        return (
            <ul id="chat-log" ref={(eol) => this.messageList = eol}>
                {this.props.messages.map((message) => <Message key={message.created}
                                                               toggleModal={this.props.toggleModal}
                                                               {...message}/>)}
            </ul>
        )
    }
}

export default ChatLog;