import { createSlice } from "@reduxjs/toolkit";

const sendMsgSlice = createSlice({
  name: "sendMsgSlice",
});

export const sendMsgActions = sendMsgSlice.actions;

export default sendMsgSlice.reducer;
