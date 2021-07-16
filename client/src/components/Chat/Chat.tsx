/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import HeaderBar from "./HeaderBar";
import InputWrapper from "./InputWrapper";
import MessageWrapper from "./MessageWrapper";
import styled from "styled-components";
import { Message } from "../../models/Message";
import { User } from "../../models/User";

const CHAT_ENDPOINT = "http://localhost:5000/";
let socket: Socket;

const Chat = () => {
    const [channel, setChannel] = useState([]);
    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        const channel_id = "testchannel";
        const user = "testuser";
        socket = io(CHAT_ENDPOINT);

        socket.on("message", (message: Message) => {
            setMessages((messages) => [...messages, message]);
        });
        socket.emit("join", { user, channel_id }, (_data: any) => { });
    }, []);

    const handleSendMessage = (messageContent: string) => {
        const message = {
            id: 1,
            user: "testuser",
            content: "messageContent",
            isFirst: false,
            timestamp: new Date(),
        };
        const channel_id = "testchannel";
        if (socket) {
            socket.emit("sendMessage", message, channel_id, () => {
                // socket -> message -> received
            });
        }
    };
    return (
        <CenterContainerDiv>
            <HeaderBar name={room.name} />
            <CharContainerDiv>
                <MessageWrapper messages={messages} />
                <InputWrapper onSendMessage={handleSendMessage} />
            </CharContainerDiv>
        </CenterContainerDiv>
    );
};

const CenterContainerDiv = styled.div`
flex-grow: 1;
background-color: var(--chat-bg-color);
height: 100vh;
display: flex;
flex-direction: column;
position: relative;
`;

const CharContainerDiv = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
position: relative;
`;

// Room for Testing //
const room = {
    name: "RyanJDev's Room",
};

// User for Testing //
const user: User = {
    id: 1,
    name: "Test User1",
    online: true,
};

// Messages for Testing //
const messages: Message[] = [
    {
        id: 1,
        user: user,
        content: "this is test message",
        isFirst: true,
        timestamp: "2021-03-27",
    },
    {
        id: 2,
        user: user,
        content:
            "this is test message. And Long message. kslnflnf sdnsdkl nsdafklsdakfl dffn",
        isFirst: false,
        timestamp: "2021-03-27",
    },
    {
        id: 3,
        user: user,
        content: "this is test message 3",
        isFirst: false,
        timestamp: "2021-03-27",
    },
    {
        id: 4,
        user: user,
        content: "this is test message 3 sklfdnsf sd from other user",
        isFirst: false,
        timestamp: "2021-03-27",
    },
];

export default Chat;