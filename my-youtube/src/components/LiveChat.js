import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, generateRandomString } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMesage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="w-full h-[400px] ml-2 p-2 border border-gray-500 
    bg-gray-100 rounded-md overflow-y-hidden overflow-y-scroll flex flex-col-reverse"
      >
        <div>
          {chatMessages.map((c, idx) => (
            <ChatMessage key={idx} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2  rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vinay",
              message: liveMesage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-96"
          type="text"
          value={liveMesage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-2 w-24 border border-black bg-red-400 rounded-md">
          Comment
        </button>
      </form>
    </>
  );
};

export default LiveChat;
