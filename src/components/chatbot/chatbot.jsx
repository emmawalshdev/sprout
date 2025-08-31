// main chatbox
import React, {useState} from "react";
import sendMessageToApi from "../../api/chat";

const Chatbox = () => {
    const [input, setInput] = useState('');
    const [botReply, setBotReply] = useState('')

    const [messages, setMessages] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!input.trim()){return;}

        // 1. add users message
        const timeNow = new Date().toLocaleTimeString();
        setMessages([...messages, {user: 'Emma', text: input, time: timeNow}]);

        // call api
        sendMessageToApi(input);
        const botReply = await sendMessageToApi(input);

        setMessages((prev) => [
            ...prev,
            {user: 'Sprout', text: botReply, time: timeNow}
        ])
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                className="bg-green-200 p-2 rounded-xl max-w-xs"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your plant question..."/>
            <button type="submit">Send</button>
        </form>
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


export default Chatbox