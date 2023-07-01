import React, { useEffect, useState } from "react";
import "./Message.css";
import { useSelector } from "react-redux";
// const inbox = [
//   { type: "outgoing", message: "Hey" },
//   { type: "incoming", message: "Hello there" },
//   { type: "outgoing", message: "What's up" },
//   {
//     type: "incoming",
//     message: "I'm good. What about you ",
//   },
//   { type: "incoming", message: "I'm good" },
// ];
const Message = () => {
  const state = useSelector((state) => state.messages.messages);
  return (
    <div className="main">
      <ul className="display">
        {state.length === 0 && <span className="empty">Start messaging</span>}
        {state.map((msg) => (
          <div key={msg.id}>
            {msg.type === "incoming" && <span className="bot">KlimbB Bot</span>}
            {msg.type === "outgoing" && <span className="user">You</span>}
            <li id={msg.id} className={msg.type}>
              {msg.message}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Message;
