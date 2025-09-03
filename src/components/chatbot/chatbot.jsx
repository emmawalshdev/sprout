// main chatbox - holds chat state + apicalls
import React, { useState, useEffect, useRef } from "react";
import sendMessageToApi from "../../api/chat";
import InputBox from './inputBox'
import MessageList from "./messageList";

const Chatbox = () => {
    const [botReply, setBotReply] = useState('')
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendData = async(input) => {
        // 1. add users message
        const timeNow = new Date().toLocaleTimeString();
        setMessages([...messages, {user: 'Emma', text: input, time: timeNow}]);

        // call api
        const botReply = await sendMessageToApi(input);

        setMessages((prev) => [
            ...prev,
            {user: 'Sprout', text: botReply, time: timeNow}
        ]);
    }

    return (
        <div className="flex flex-col h-[80vh] rounded-xl border max-w-md shadow-lg overflow-hidden mx-auto">
            <div className="p-4 bg-white">
                <InputBox onSend={sendData}/>
            </div>
            <div className="flex-1 p-4 overflow-y-auto spay-y-3 bg-gray-50 text-black">
                <MessageList messages={messages} botReply={botReply}/>
                <div ref={messagesEndRef}/>
            </div>
        </div>
    )
}


export default Chatbox