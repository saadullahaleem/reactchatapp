import React from "react";

const NavBar = (props) => {
    return (
        <div className="navbar-fixed">
            <nav className="white">
                <div className="nav-wrapper container">
                    <b><a href="/" className="brand-logo left black-text">Slack & Stream</a></b>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><b><a onClick={props.handleLogout} className="black-text">Log out</a></b></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;