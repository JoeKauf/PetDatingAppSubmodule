import { createSlice } from "@reduxjs/toolkit";

export const mypetsSlice = createSlice({
  name: "userAuth",
    initialState: {
        email: '',
        name: '',
        isShelter: false,   
        chats: [],
    },
  reducers: {
    signUpAnimalShelter: (state, action) => {
        // Get database information and check to make sure the values here are valid
        return {
            ...state,
            isAnimalShelter: action.payload
        }
    },
    signUpAccount: (state, action) => {
        // Get database information and check to make sure the values here are valid
        return {
            ...state,
            isAccount: action.payload
        }
    },
    logInAccount: (state, action) => {
         // Get database information and check to make sure the values here are valid
        return {
            email: action.payload.email,
            name: action.payload.name,
            isShelter: action.payload.isShelter,
            chats: action.payload.chats,
        }
    },
  }
});

// Action creators are generated for each case reducer function
export const {
  signUpAnimalShelter,
  signUpAccount,
  logInAccount,
  logInAnimalShelter,
} = mypetsSlice.actions;

export default mypetsSlice.reducer;