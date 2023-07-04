import React from "react";
import Header from "../Header/Header";
import "./ChatBox.css";
import Message from "../messages/Message";
import Form from "../Form/Form";
const Chatbox = (props) => {
  return (
    <div className="chat">
      <Header />
      <Message />
      <Form />
    </div>
  );
};

export default Chatbox;
