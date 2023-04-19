import { createSlice } from "@reduxjs/toolkit";

export const dogBreedSlice = createSlice({
  name: "querySettings",
    initialState: {
        type: {
            isDog: true,
        },
        breed: {
            // Breed should be pulled from the database
            dog: [],
            cat: [],
        },
        ageRange: {
            cat: [{
                value: "Kitten",
                isSelected: true,
            },
            {
                value: "Young",
                isSelected: true,
            },
            {
                value: "Adult",
                isSelected: true,
            },
            {
                value: "Old",
                isSelected: true,
            },],
            dog: [
            {
                value: "Puppy",
                isSelected: true,
            },
            {
                value: "Young",
                isSelected: true,
            },
            {
                value: "Adult",
                isSelected: true,
            },
            {
                value: "Old",
                isSelected: true,
            },]
        },
        gender: {
            cat:
            {
                male: true,
                female: true,
            },
            dog: {
                male: true,
                female: true,
            }
        },
        friendlyWith: {
            cat: {
                isKidFriendly: false,
                isDogFriendly: false,
                isCatFriendly: false,
            },
            dog: {
                isKidFriendly: false,
                isDogFriendly: false,
                isCatFriendly: false,
            },
        },
        coat:[
            {
                value: "Short",
                isSelected: true,
            },
            {
                value: "Medium",
                isSelected: true,
            },
            {
                value: "Long",
                isSelected: true,
            },
            {
                value: "Hypo...",
                isSelected: true,
            },],
        houseTrained: {
            cat: false,
            dog: false,
        },
        size: {
            dog: [
            {
                value: "0-25 lbs",
                isSelected: true,
            },
            {
                value: "25-60 lbs",
                isSelected: true,
            },
            {
                value: "60+ lbs",
                isSelected: true,
            },],
            cat: [
                {
                    value: "0-5 lbs",
                    isSelected: true,
                },
                {
                    value: "5-12 lbs",
                    isSelected: true,
                },
                {
                    value: "12+ lbs",
                    isSelected: true,
                },],
        },
        location: {
            city: null,
            state: null,
            latitude: null,
            longitude: null,
        },
        maxDistance: 10,
        pushNotifications: true,
    },
reducers: {
    updateAnimalType: (state, action) => {
        return {
            ...state,
            type: {
                ...state.type,
                isDog: action.payload,
            }
        }
    },
    updateDogBreedSelection: (state, action) => {
        return {
            ...state,
            breed: {
                ...state.breed,
                dog: action.payload,
            }
        }
    },
    updateCatBreedSelection: (state, action) => {
        return {
            ...state,
            breed: {
                ...state.breed,
                cat: action.payload,
            }
        }
    },
    updateDogAgeRange: (state, action) => {
        return {
            ...state,
            ageRange: {
                ...state.ageRange,
                dog: action.payload,
            }
        }
    },
    updateCatAgeRange: (state, action) => {
        return {
            ...state,
            ageRange: {
                ...state.ageRange,
                cat: action.payload,
            }
        }
    },
    updateCatGender: (state, action) => {
        return {
            ...state,
            gender: {
                ...state.ageRange,
                cat: action.payload,
            }
        }
    }, 
    updateDogGender: (state, action) => {
        return {
            ...state,
            gender: {
                ...state.gender,
                dog: action.payload,
            }
        }
    }, 
    updateCoat: (state, action) => {
            return {
                ...state,
                coat: action.payload,
            }
    },
    updateCatSize: (state, action) => {
        return {
            ...state,
            size: {
                ...state.size,
                cat: action.payload,
            }
        }
    },
    updateDogSize: (state, action) => {
        return {
            ...state,
            size: {
                ...state.size,
                dog: action.payload,
            }
        }
    },
    updateDogFriendlyWith: (state, action) => {
        return {
            ...state,
            friendlyWith: {
                ...state.friendlyWith,
                dog: action.payload, 
            } ,
        }
    },
    updateCatFriendlyWith: (state, action) => {
        return {
            ...state,
            friendlyWith: {
                ...state.friendlyWith,
                cat: action.payload, 
            } ,
        }
    },
    updateCatHouseTrained: (state, action) => {
        return {
            ...state,
            houseTrained: {
                ...state.houseTrained,
                cat: action.payload, 
            } ,
        }
    },
    updateDogHouseTrained: (state, action) => {
        return {
            ...state,
            houseTrained: {
                ...state.houseTrained,
                dog: action.payload, 
            } ,
        }
    },
    updateMaxDistance: (state, action) => {
        return {
            ...state,
            maxDistance: action.payload,
        }
    },
    updateLocation: (state, action) => {
        return {
            ...state,
            location: action.payload,
        }
    }
    // Update Location
  }
});

// Action creators are generated for each case reducer function
export const {
    updateDogBreedSelection,
    updateCatBreedSelection,
    updateAnimalType,
    updateCatAgeRange,
    updateDogAgeRange,
    updateCoat,
    updateCatSize,
    updateDogSize,
    updateCatGender,
    updateDogGender,
    updateCatFriendlyWith,
    updateDogFriendlyWith,
    updateCatHouseTrained,
    updateDogHouseTrained,
    updateMaxDistance,
    updateLocation,
} = dogBreedSlice.actions;

export default dogBreedSlice.reducer;