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
      const res = await axios.get("http://localhost:3001/get-message");
      // console.log(...res.data);
      // res.data.forEach((element) => {
      //   dispatch(messageActions.getMessage(element));
      // });
      dispatch(messageActions.getMessage(res.data));
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
