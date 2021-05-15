import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: { room: "" },
  reducers: {
    changeRoom(state, action) {
      state.room = action.payload;
    },
  },
});

export const roomActions = roomSlice.action;

export default roomSlice.reducer;
