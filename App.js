import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FindPets from './components/FindPets/FindPets';
import ChatWithPets from './components/ChatAndLikes/ChatWithPets';
import InnerChat from './components/ChatAndLikes/IndividualChat.jsx/InnerChat';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './components/Settings/Settings';
import MultiSelectBreed from './components/Settings/MultiSelectBreed';
import SearchableLocation from './components/Settings/SearchableLocation';
import SignedInPages from './components/SignedInPages/SignedInPages';
import store from './redux/store';
import { Provider, useSelector } from 'react-redux';

import ShelterAnimals from './components/AnimalShelterComponents/Animals/Animals';
import PetName from './components/AnimalShelterComponents/AddPet/PetName';
import PetDOB from './components/AnimalShelterComponents/AddPet/PetDOB';
import PetGender from './components/AnimalShelterComponents/AddPet/PetGender';
import PetBreed from './components/AnimalShelterComponents/AddPet/PetBreed';
import PetWeight from './components/AnimalShelterComponents/AddPet/PetWeight';
import PetPrice from './components/AnimalShelterComponents/AddPet/PetPrice';
import FriendlyWith from './components/AnimalShelterComponents/AddPet/FriendlyWith';
import HouseTrained from './components/AnimalShelterComponents/AddPet/HouseTrained';
import EnergyLevel from './components/AnimalShelterComponents/AddPet/EnergyLevel';
import PetMedical from './components/AnimalShelterComponents/AddPet/PetMedical';
import PetDescription from './components/AnimalShelterComponents/AddPet/PetDescription';
import AddPhotos from './components/AnimalShelterComponents/AddPet/AddPhotos';
import ShelterMessages from './components/AnimalShelterComponents/Messages/ShelterMessages';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LogInPage"
              component={SignedInPages}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Shelter Animals"
              component={ShelterAnimals}
              options={{
                gestureEnabled: false,
                headerShown: false,
                headerBackVisible: false
              }}
            />
            <Stack.Screen
              name="ShelterMessages"
              component={ShelterMessages}
              options={{
                gestureEnabled: false,
                headerShown: false,
                headerBackVisible: false
              }}
            />
            <Stack.Screen
              name="AddPhotos"
              component={AddPhotos}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetDescription"
              component={PetDescription}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetMedical"
              component={PetMedical}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EnergyLevel"
              component={EnergyLevel}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HouseTrained"
              component={HouseTrained}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FriendlyWith"
              component={FriendlyWith}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetPrice"
              component={PetPrice}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetWeight"
              component={PetWeight}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetBreed"
              component={PetBreed}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetGender"
              component={PetGender}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Birthday"
              component={PetDOB}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PetName"
              component={PetName}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Pet App"
              component={FindPets}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerBackVisible: false
              }}
            />
            <Stack.Screen
              name="Messages"
              component={ChatWithPets}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Inner Chat"
              component={InnerChat}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Breed"
              component={MultiSelectBreed}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SearchableLocation"
              component={SearchableLocation}
              options={{
                headerStyle: {
                  backgroundColor: '#ffff',
                },
                headerTintColor: '#23A617',
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '33px',
                },
                headerShown: false,
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
