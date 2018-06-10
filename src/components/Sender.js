import React  from  "react";

const SenderName = (props) => {
    return (
        <b>
            <a href="#" onClick={() => {props.func(props.senderId, props.sender)}}>{props.sender}</a>
        </b>
    );
};

export default SenderName;