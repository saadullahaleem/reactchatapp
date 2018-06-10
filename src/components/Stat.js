import React from "react";

const Stat = (props) => {
    return (
            <div className="col s12">
                <b>{props.name}: </b>
                <b id="leader">{props.value}</b>
            </div>
        )
};

export default Stat;