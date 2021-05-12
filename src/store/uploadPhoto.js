import { createSlice } from "@reduxjs/toolkit";

const uploadPhotoSlice = createSlice({
  name: "uploadPhotoSlice",
});

export const uploadPhotoActions = uploadPhotoSlice.actions;

export default uploadPhotoSlice.reducer;
