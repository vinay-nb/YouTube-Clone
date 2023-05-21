import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img alt="user" src="user.png" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>

    </div>
  );
};

export default ChatMessage;
