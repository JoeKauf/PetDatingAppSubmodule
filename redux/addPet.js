import { createSlice } from "@reduxjs/toolkit";

export const addPetSlice = createSlice({
  name: "userAuth",
  initialState: {
      isDog: true,
      name: '',
      dob: '',
      isMale: true,
      breeds: [],
      weight: '10',
      price: '10',
      isDogFriendly: true,
      isCatFriendly: true,
      isKidFriendly: true,
      isHouseTrained: false,
      activityLevel: 'Medium',
      medicalStatus: '',
      petDescription: '',
      photos: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
      },
    },
  reducers: {
    setAnimalType: (state, action) => {
        return {
            ...state,
            isDog: action.payload
        }
    },
    setName: (state, action) => {
        return {
            ...state,
            name: action.payload
        }
    },
    setDOB: (state, action) => {
        return {
            ...state,
            dob: action.payload
        }
    },
    setGender: (state, action) => {
        return {
            ...state,
            isMale: action.payload,
        }
      },
    setBreeds: (state, action) => {
        return {
            ...state,
            breeds: action.payload,
        }
      },
    setWeight: (state, action) => {
      let weightString = action.payload;
      weightString = weightString.replace(/\D/g, '');
            
        return {
            ...state,
            weight: weightString,
        }
      },
    setPrice: (state, action) => {
      let priceString = action.payload;
      priceString = priceString.replace('.', '').toString();;

        return {
            ...state,
            price: priceString,
        }
      },
    setDogFriendly: (state, action) => {
        return {
            ...state,
            isDogFriendly: action.payload,
        }
      },
    setCatFriendly: (state, action) => {
        return {
            ...state,
            isCatFriendly: action.payload,
        }
      },
    setKidFriendly: (state, action) => {
        return {
            ...state,
            isKidFriendly: action.payload,
        }
      },
    setHouseTrained: (state, action) => {
        return {
            ...state,
            isHouseTrained: action.payload,
        }
      },
    setEnergyLevel: (state, action) => {
        return {
            ...state,
            activityLevel: action.payload,
        }
      },
    setMedicalStatus: (state, action) => {
        return {
            ...state,
            medicalStatus: action.payload,
        }
      },
    setPhotos: (state, action) => {
      switch(action.payload[1]) {
        case 0:
          return {
            ...state,
            photos: {
                ...state.photos,
                one: action.payload[0],
            }
          }
        case 1:
          return {
            ...state,
            photos: {
                ...state.photos,
                two: action.payload[0],
            }
          }
        case 2:
          return {
            ...state,
            photos: {
                ...state.photos,
                three: action.payload[0],
            }
          }
        case 3:
          return {
            ...state,
            photos: {
                ...state.photos,
                four: action.payload[0],
            }
          }
        case 4:
          return {
            ...state,
            photos: {
                ...state.photos,
                five: action.payload[0],
            }
          }
        case 5:
          return {
            ...state,
            photos: {
                ...state.photos,
                six: action.payload[0],
            }
          }
      }
      },
    setDescription: (state, action) => {
        return {
            ...state,
            petDescription: action.payload,
        }
      },
  }
});

// Action creators are generated for each case reducer function
export const {
  setAnimalType,
  setName,
  setDOB,
  setGender,
  setBreeds,
  setWeight,
  setPrice,
  setDogFriendly,
  setCatFriendly,
  setKidFriendly,
  setHouseTrained,
  setEnergyLevel,
  setMedicalStatus,
  setPhotos,
  setDescription,
} = addPetSlice.actions;

export default addPetSlice.reducer;