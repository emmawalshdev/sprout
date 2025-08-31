// start chat input
import React, {useState} from "react";

const InputBox = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()){return;}
        onSend(input);
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
        </>
    )
}

export default InputBox;