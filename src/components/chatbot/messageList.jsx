import React, {useState} from "react";

const MessageList = ({messages, botReply}) => {
    return (
        <>
        {botReply && 
        <div>
            {botReply}
        </div>}
        {messages.map((msg, index) => (
            <div 
                key={index}
                className={`flex ${msg.user === "Emma" ? "justify-end" : "justify-start"} mb-2`}
                >
                <div 
                    className={`px-4 py-2 rounded-xl max-w-xs breakwords
                    ${msg.user === "Emma" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                    <div className="flex flex-start mt-2">
                        {msg.text}
                    </div>
                    <div className="flex flex-row justify-start space-x-1 text-gray-600 text-[10px]">
                        <span>Sent by {msg.user}</span> 
                        <span>@ {msg.time}</span> 
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default MessageList;