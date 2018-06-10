import React from "react";
import {Stat} from "./";

const StatsWindow = (props) => {
    return (
        <div id="stats">
            <div className="row grey-text">
                <Stat name="Messages in last minute" value={props.stats.messagesCount}/>
                <Stat name="Leader" value={props.stats.leader}/>
            </div>
        </div>
    )
};

export default StatsWindow;