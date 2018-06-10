import React  from  "react";

import moment from "moment";
import {SenderName, Time} from "./";

const Message = (props) => {
    let func = () => {};
    if(props.toggleModal) {
        func = props.toggleModal
    }

    return (
        <li className="chat-item row">
            <div className="col m9">
                <SenderName sender={props.sender} senderId={props.senderId} func={func}/>: {props.message}
            </div>
            <div className="col m3">
                <Time time={moment(props.created).format("hh:mm a")}/>
            </div>
        </li>
    );
};

export default Message;