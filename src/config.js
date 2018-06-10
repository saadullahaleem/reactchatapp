const currentEnv = "staging";

const dev = {
    host: "localhost:7000"
};

const staging = {
    host: "http://someHerokuUrl"
};

const config = currentEnv === 'staging'
    ? staging
    : dev;

export default {
    googleClientId: "468903129848-m84a90p75vd76aofp3mu844fgb5prsna.apps.googleusercontent.com",
    ...config
};