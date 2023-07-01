import React, { useEffect } from "react";
import axios from "axios";
import Chatbox from "./components/ui/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "./store/messageReducer";
function App() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.messages);
  useEffect(() => {
    const get = async () => {
      axios
        .get("http://localhost:3001/get-message")
        .then((res) => {
          console.log(res);
          dispatch(messageActions.getMessage(res.data));
        })
        .catch((error) => {
          dispatch(
            messageActions.sendMessage({
              message: "Error: Something went wrong. Please try again!",
              type: "incoming",
              id: "err",
            })
          );
        });
    };
    get();
  }, []);
  // console.log(state);

  return (
    <>
      <Chatbox />
    </>
  );
}

export default App;
