// start chat input
import React, {useState} from "react";
import sendMessageToApi from "../../api/chat";

const InputBox = () => {
    const [input, setInput] = useState('');
    const [botReply, setBotReply] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
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
        </>
    )
}

export default InputBox;