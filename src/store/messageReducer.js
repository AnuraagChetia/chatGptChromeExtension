import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    sendMessage(state, action) {
      const newMessage = action.payload;
      state.messages.push(newMessage);
    },
    getMessage(state, action) {
      const newMessage = action.payload;
      return { ...state, messages: newMessage };
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
