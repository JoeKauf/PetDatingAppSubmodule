import { configureStore } from '@reduxjs/toolkit'
import mypetsReducer from './mypets'
import querySettingsReducer from './querySettings'
import animalBreedsReducer from './animalBreeds'
import chatDataReducer from './chatData'
import userAuthReducer from './userAuth'
import addPetReducer from './addPet'

export default store = configureStore({
    reducer: {
      mypets: mypetsReducer,
      query: querySettingsReducer,
      breeds: animalBreedsReducer,
      chatData: chatDataReducer,
      userAuth: userAuthReducer,
      addPet: addPetReducer,
    },
})