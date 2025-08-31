import React, {useState} from "react";

const MessageList = ({messages, botReply}) => {
    return (
        <>
        hello
        {botReply && 
        <p>
            {botReply}
        </p>}
        {messages.map((msg, index) => (
            <p key={index}>
                <span>Text: {msg.text}</span> <br />
                <span>User: {msg.user}</span> <br />
                <span>Time: {msg.time}</span> <br />
            </p>
        ))}
        </>
    )
}

export default MessageList;