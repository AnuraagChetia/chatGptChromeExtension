import React, { useEffect, useRef } from "react";
import "./Message.css";
import Typewriter from "react-ts-typewriter";
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
  // const typeRef = useRef();
  // const containerElement = typeRef.current;
  // const scrollToBottom = () => {
  //   containerElement.scrollTop = containerElement.scrollHeight;
  // };

  return (
    <ul className="display">
      {state.map((msg) => (
        <div key={msg.id} className="msgDiv">
          {(msg.type === "incoming" || msg.type === "new") && (
            <span className="bot"> Grogu</span>
          )}
          {msg.type === "outgoing" && <span className="user">You</span>}
          <li id={msg.id} className={msg.type}>
            {msg.type === "new" && (
              // <Typed strings={[msg.message]} typeSpeed={10} />
              <Typewriter
                text={msg.message}
                cursor={false}

                // onFinished={scrollToBottom}
              />
            )}
            {msg.type === "incoming" && msg.message}
            {msg.type === "outgoing" && msg.message}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Message;
