import React from "react";
import {Message} from "./";
import ReactDOM from "react-dom";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    };

    onScroll = () => {
        let {offsetHeight, scrollTop, scrollHeight} = ReactDOM.findDOMNode(this);

        if (offsetHeight + scrollTop >= scrollHeight) {
            if (this.props.next) {
                this.props.getUserMessages(this.props.selectedSenderId);
            }
        }
    };

    render() {
        return (
            <div id="modal1" className="modal" onScroll={this.onScroll}>
                <div className="modal-header">
                    <div className="col s10">
                        <h4>All messages by {this.props.selectedSender}</h4>
                    </div>
                    <div className="col s2 right">
                        <a href="#" onClick={this.props.toggleModal}
                           className="modal-close waves-effect waves-green btn red darken-1">Back</a>
                    </div>
                </div>
                <div className="modal-content row">
                    <ul id="all-user-messages" ref={(eol) => this.messageList = eol}>
                        {
                            this.props.selectedUserMessages.map((message) =>
                                <Message {...message} sender={this.props.selectedSender}/>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Modal;