import React from "react";
import {ChatLog, StatsWindow, MessageForm} from "./";

class ChatWindow extends React.Component {

    render() {
        return (
            <div className="col s12 m5">
                <StatsWindow stats={this.props.stats}/>
                <ChatLog messages={this.props.messages} toggleModal={this.props.toggleModal}/>
                <MessageForm value={this.props.value} handleSubmit={this.props.handleSubmit}
                             handleChange={this.props.handleChange}/>
            </div>
        )
    }
}

export default ChatWindow;