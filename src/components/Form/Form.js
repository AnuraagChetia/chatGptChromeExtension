import React, { useRef } from "react";
import axios from "axios";
import "./Form.css";
import sendBtn from "../../assets/send-button.png";
import { useDispatch } from "react-redux";
import { messageActions } from "../../store/messageReducer";

const saveToLocal = (msg) => {
  let history = JSON.parse(localStorage.getItem("messages"));
  if (history === null) history = [];
  // console.log(history);
  history.push(msg);
  localStorage.setItem("messages", JSON.stringify(history));
};

const Form = () => {
  const messageRef = useRef();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const message = messageRef.current.value;
      if (message.trim() === "") {
        messageRef.current.value = "";
        return;
      }
      const newText = {
        id: Math.random(),
        type: "outgoing",
        message: message,
      };

      saveToLocal(newText);

      dispatch(
        messageActions.sendMessage({
          id: Math.random(),
          type: "outgoing",
          message: message,
        })
      );

      messageRef.current.value = "";

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newText
      );
      if (res.status === 201) {
        const response = res.data;
        const updatedResponse = {
          ...response,
          type: "incoming",
          id: Math.random(),
        };
        saveToLocal(updatedResponse);
        setTimeout(() => {
          dispatch(
            messageActions.sendMessage({ ...updatedResponse, type: "new" })
          );
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      console.log("Error: Something went wrong");
      dispatch(
        messageActions.sendMessage({
          message: "Error: Something went wrong. Please try again!",
          type: "incoming",
          id: "err",
        })
      );
      saveToLocal({
        message: "Error: Something went wrong. Please try again!",
        type: "incoming",
        id: "err",
      });
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <div className="formItems">
          <input
            type="text"
            placeholder="Send message"
            className="input"
            ref={messageRef}
          />
          <button type="submit" className="button">
            <img src={sendBtn} className="sendBtn" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
