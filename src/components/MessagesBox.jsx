import React, { useEffect, useRef } from "react";
import Message from "./Message";

export default function MessagesBox({ messages }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col ">
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          time={message.time}
          align={message.type === "user" ? "items-end" : "items-start"}
          bgColor={message.type === "user" ? "bg-[#6E00FF]" : "bg-gray-300"}
          imgurl={message.image}
        />
    ))}
    <div ref={messagesEndRef}/>
    </div>
  );
}
