import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";

const store = configureStore({
  reducer: { messages: messageReducer },
});

export default store;
