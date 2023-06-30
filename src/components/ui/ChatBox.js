import React from "react";
import Header from "../Header/Header";
import "./ChatBox.css";
import Message from "../messages/Message";
import Form from "../Form/Form";
const Chatbox = (props) => {
  return (
    <>
      <Header />
      <Message />
      <Form />
    </>
  );
};

export default Chatbox;
