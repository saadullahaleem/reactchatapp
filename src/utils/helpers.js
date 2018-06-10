import config from "./../config";

const fetchMessagesByUser = (userId, authToken, next) => {
    let url = `http://${config.host}/messages/?user_id=${userId}`;
    if(next){
        url = next;
    }
    return fetch(url, {
        headers: {
            Authorization: `Token ${authToken}`
        }
    })
        .then((res) => res.json());
};

const fetchLoggedInUserInfo = (authToken) => {
    return fetch(`http://${config.host}/profile/`, {
        headers: {
            Authorization: `Token ${authToken}`
        }
    })
        .then((res) => res.json());
};


const googleLogin = (accessToken) => {
    const endPoint = 'oauth/google-oauth2';
    return fetch(`http://${config.host}/${endPoint}/`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_token: accessToken
            })
        }
    )
        .then((res) => res.json());
};

const logout = (authToken) => {
    const endPoint = 'auth/logout';
    return fetch(`http://${config.host}/${endPoint}/`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            }
        }
    )
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        });
};

export {
    fetchMessagesByUser,
    googleLogin,
    fetchLoggedInUserInfo,
    logout
};