import React from "react";
import GoogleLogin from "react-google-login";
import {googleLogin} from "./../utils/helpers";
import config from "./../config"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    };

    handleGoogleLogin(res) {
        googleLogin(res.accessToken)
            .then((res) => {
                this.props.handleLogin(res);
            });
    }

    render() {
        return (
            <div className="row login-screen">
                <div className="col m6 card-panel white offset-m3 center">
                    <h1>Chat and Stream</h1>
                    <h4>Sign in to view the live video stream and chat with other users</h4>
                    <div className="login-button">
                        <GoogleLogin
                            buttonText="Login with Google" clientId={config.googleClientId}
                            onSuccess={this.handleGoogleLogin}
                            onFailure={this.handleGoogleLogin}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;