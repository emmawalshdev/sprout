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
                className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your plant question..."/>
            <button 
                type="submit"
                className="bg-green-500 text-white ml-2 px-5 py-2 rounded-xl hover:bg-green-600">
                Send
            </button>
        </form>
        </>
    )
}

export default InputBox;