// main chatbox - holds chat state + apicalls
import React, {useState} from "react";
import sendMessageToApi from "../../api/chat";
import InputBox from './inputBox'
import MessageList from "./messageList";

const Chatbox = () => {
    const [botReply, setBotReply] = useState('')
    const [messages, setMessages] = useState([]);

    const sendData = async(input) => {

        // 1. add users message
        const timeNow = new Date().toLocaleTimeString();
        setMessages([...messages, {user: 'Emma', text: input, time: timeNow}]);

        // call api
        sendMessageToApi(input);
        const botReply = await sendMessageToApi(input);

        setMessages((prev) => [
            ...prev,
            {user: 'Sprout', text: botReply, time: timeNow}
        ]);
    }

    return (
        <>
        <InputBox onSend={sendData}/>
        <MessageList messages={messages} botReply={botReply}/>
        </>
    )
}


export default Chatbox