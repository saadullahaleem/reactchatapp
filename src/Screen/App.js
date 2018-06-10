import React from "react";
import {Dashboard, Login} from "./"
import "./../index.css";
import {logout, fetchLoggedInUserInfo} from "../utils/helpers";

class App extends React.Component {
    constructor() {
        super();

        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isLoggedInUser: false,
            user: {
                alias: null,
                id: null
            },
        }
    }

    componentDidMount() {
        const authToken = localStorage.getItem("authToken");

        if (authToken) {
            fetchLoggedInUserInfo(authToken)
                .then((userInfo) => {
                    this.setState({
                        user: userInfo,
                        isLoggedInUser: true
                    });
                });
        }

    }

    handleLogin(obj) {
        localStorage.setItem("authToken", obj.auth_token);
        this.setState({
            isLoggedInUser: true,
            user: obj.user
        });
    }

    handleLogout = () => {
        logout(localStorage.getItem("authToken"))
            .then(() => {
                localStorage.clear();
                this.setState({
                    isLoggedInUser: false,
                    user: {
                        alias: null,
                        id: null
                    }
                });
            }).catch((err) => {
                alert(err);
        })
    };


    render() {
        return (
            <div>
                <div>
                    {this.state.isLoggedInUser ? <Dashboard user={this.state.user} handleLogout={this.handleLogout}/> :
                        <Login handleLogin={this.handleLogin}/>}
                </div>
            </div>
        )
    }
}

export default App;