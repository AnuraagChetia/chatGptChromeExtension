import React, { useEffect } from "react";
import Chatbox from "./components/ui/ChatBox";
import { useDispatch } from "react-redux";
import { messageActions } from "./store/messageReducer";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("messages"));
    if (data === null) {
      return;
    }
    data.forEach((msg) => {
      dispatch(messageActions.sendMessage(msg));
    });
  }, []);
  // console.log(state);
  return (
    <>
      <Chatbox />
    </>
  );
}

export default App;
