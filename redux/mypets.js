import { createSlice } from "@reduxjs/toolkit";

export const mypetsSlice = createSlice({
  name: "mypets",
  initialState: [],
  reducers: {
    addLikedPets: (state, action) => {
      return action.payload
    },
    addPet: (state, action) => {
      state.push(action.payload)
    },
    removePet: (state, action) => {      
      state.splice(state.findIndex((pet) => pet.id === action.payload), 1);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPet, removePet, addLikedPets } = mypetsSlice.actions;

export default mypetsSlice.reducer;