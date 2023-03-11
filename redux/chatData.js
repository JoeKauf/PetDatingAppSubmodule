import { createSlice } from "@reduxjs/toolkit";

export const chatDataSlice = createSlice({
  name: "chatData",
  initialState: {
  },
  reducers: {
    setChatData: (state, action) => {
      return {
        state: action.payload,
      }
    },
    setChatId: (state, action) => {
      return {
        ...state,
        chatId: action.payload,
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setChatData, setChatId } = chatDataSlice.actions;

export default chatDataSlice.reducer;