// start chat input
import React, {useState} from "react";
import sendMessageToApi from "../../api/chat";

const InputBox = () => {
    const [input, setInput] = useState('');
    const [botReply, setBotReply] = useState('')

    const [messages, setMessages] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!input.trim()){return;}

        const timeNow = new Date().toLocaleTimeString();

        setMessages([...messages, {user: 'Emma', text: input, time: timeNow}]);

        sendMessageToApi(input);
        const botReply = await sendMessageToApi(input);
        setBotReply(botReply);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
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
                <span>Text: {msg.text}</span>
                <span>User: {msg.user}</span>
                <span>Time: {msg.time}</span>
            </p>
        ))}
        </>
    )
}

export default InputBox;