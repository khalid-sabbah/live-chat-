import React, { useEffect, useState } from "react";
import MessagesBox from "./MessagesBox";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

export default function ChatWindow({close , currentChat}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleSendMessage = (messageText, messageImage) => {
    const newMessage = {
      text: messageText,
      time: new Date().toLocaleTimeString("en-US"),
      type: "user",
      image: messageImage,
    };
    // setMessages([...messages, newMessage]);
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    setTimeout(() => {
      const replyMessage = {
        text: "iam fine, what about you?",
        time: new Date().toLocaleTimeString("en-US"),
        type: "replay",
      };
      const updatedMessagesWithReply = [...updatedMessages, replyMessage];
      setMessages(updatedMessagesWithReply);
      localStorage.setItem(
        "messages",
        JSON.stringify(updatedMessagesWithReply)
      );
    }, 1000);
  };

  return (
    <>
      <div className="  h-screen flex flex-col ">
        <div className=" bg-white ">
          <ChatHeader currentChat={currentChat} close={close} />
        </div>
        <div className="flex-1 overflow-y-auto bg-white p-3 ">
          <MessagesBox messages={messages} />
        </div>
        <div className=" bg-white ">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="container p-3 bg-chatBlue ">
        <div className="head-container bg-white border-b border-gray-200 p-3 flex items-center justify-between ">
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Ahmed</span>
              <span className="font-thin text-sm">online</span>
            </div>
          </div>
          <div className="flex gap-3">
            <span>< IoCallOutline className="w-6 h-6 text-customPurp"/></span>
            <span>< MdOutlineVideoCall className="w-6 h-6 text-customPurp"/></span>
            <span>< HiDotsVertical className="w-6 h-6 text-customPurp"/></span>
          </div>
        </div>
        <div className="messagesbox bg-white p-3">
            <MessagesBox/>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
           <MessageInput/>
        </div>
      </div> */
}

{
  /* <>
<div className="fixed top-0 bg-white w-full ">
  <ChatHeader />
</div>
<div className=" h-screen bg-black">
  <div className="bg-white h-full rounded-lg shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] ">
    <div className=" flex flex-col  bg-white p-3">
      <MessagesBox messages={messages} />
    </div>
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  </div>
</div>
</> */
}
