import config from "./../config"

class ChatSocket {
    constructor(authToken) {
        this.chatSocket = new WebSocket(`ws://${config.host}/ws/chat/?authToken=${authToken}`);
    }

    sendMessage(message) {
        this.chatSocket.send(JSON.stringify(message));
    }

    askForUpdatedStats() {
        this.chatSocket.send(JSON.stringify({"type": "stats"}))
    }
}

export default ChatSocket