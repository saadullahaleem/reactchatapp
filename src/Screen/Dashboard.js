import React from "react";

import {StreamWindow, ChatWindow, Modal, NavBar} from "./../components";
import ChatSocket from "./../utils/webSocket";
import {fetchMessagesByUser} from "./../utils/helpers";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            stats: {
                messagesCount: 0,
                leader: ""
            },
            user: props.user,
            messages: [],
            showModal: false,
            selectedSender: null,
            selectedSenderId: null,
            selectedUserMessages: [],
            next: null
        };
        this.socket = new ChatSocket(localStorage.getItem('authToken'));
        this.initiateListener();

        setInterval(() => {
            this.socket.askForUpdatedStats();
        }, 5000);

    }

    initiateListener = () => {
        this.socket.chatSocket.onmessage = (e) => {
            let data = JSON.parse(e.data);
            let type = data['type'];

            if (type === 'user_connected') {
                this.onUserConnected(data);
            }

            if (type === 'stats') {
                this.onStatsUpdate(data);
            }

            if (type === 'chat_message') {
                this.onChatMessage(data);
            }
        };
    };

    onStatsUpdate = (data) => {
        let {messages_count, leader} = data;
        this.setState({
            stats: {
                messagesCount: messages_count,
                leader
            }
        })
    };

    onUserConnected = (data) => {
        let message = "has joined this chat";
        let sender = data.user;
        let senderId = data.user_id;
        let created = data.created;

        const messages = this.state.messages;
        messages.push({message, sender, senderId: senderId, created});
        this.setState({
            messages
        });
    };

    onChatMessage = (data) => {

        let {message, sender, sender_id, created} = data;
        const messages = this.state.messages;
        messages.push({message, sender, senderId: sender_id, created});
        this.setState({
            messages
        });

    };

    getUserMessages = (senderId) => {
        fetchMessagesByUser(senderId, localStorage.getItem('authToken'), this.state.next)
            .then((res) => {
                this.setState({
                    next: res.next,
                    selectedUserMessages: [...this.state.selectedUserMessages, ...res.results]
                });
            })
    };

    toggleModal = (senderId, sender) => {
        let messages = this.state.showModal ? this.state.selectedUserMessages : [];
        this.setState({
            showModal: !this.state.showModal,
            selectedUserMessages: messages
        });
        if (typeof(senderId) === "number") {
            this.getUserMessages(senderId);
            this.setState({
                selectedSender: sender,
                selectedSenderId: senderId
            });
        } else {
            this.setState({
                selectedSender: null,
                selectedSenderId: null,
                next: null
            });
        }

    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.value.trim().length) {
            return
        }

        this.socket.sendMessage({
            'message': this.state.value,
            'sender': this.state.user.alias,
            'sender_id': this.state.user.id,
            'type': 'chat_message'
        });
        this.setState({value: ""});
    };

    render() {
        return (
            <div>
                <NavBar handleLogout={this.props.handleLogout}/>
                <div className="container-fluid">
                    <div className="row" id="main">
                        {this.state.showModal &&
                        <Modal toggleModal={this.toggleModal} getUserMessages={this.getUserMessages} {...this.state}/>}
                        <StreamWindow/>
                        <ChatWindow handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                                    toggleModal={this.toggleModal}{...this.state}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard;