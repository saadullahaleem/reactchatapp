const currentEnv = "staging";

const dev = {
    host: 'localhost:7000'
};

const staging = {
    host: 'ec2-18-218-255-146.us-east-2.compute.amazonaws.com:8000'
};

const config = currentEnv === 'staging'
    ? staging
    : dev;

export default {
    googleClientId: "468903129848-m84a90p75vd76aofp3mu844fgb5prsna.apps.googleusercontent.com",
    ...config
};