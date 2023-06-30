import React, { useRef } from "react";
import axios from "axios";
import "./Form.css";
import { useDispatch } from "react-redux";
import { messageActions } from "../../store/messageReducer";
const Form = () => {
  const messageRef = useRef();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const message = messageRef.current.value;
      const data = {
        type: "outgoing",
        message: message,
      };
      const res = await axios.post("http://localhost:3001/send-message", data);
      if (res.statusText === "OK") {
        //dispatch action in redux store
        dispatch(messageActions.sendMessage(res.data));
      }
      const botRes = await axios.post("http://localhost:3001/bot-message", res);
      setTimeout(() => {
        console.log(botRes);
        if (botRes.statusText === "OK") {
          dispatch(messageActions.sendMessage(botRes.data));
        }
      }, 1000);
      messageRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Send message"
        className="input"
        ref={messageRef}
      />
      <button type="submit" className="button">
        Send
      </button>
    </form>
  );
};

export default Form;
