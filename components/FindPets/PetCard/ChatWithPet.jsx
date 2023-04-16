import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import { setChatData } from "../../../redux/chatData"

const ChatWithPet = ({ navigation, isSwipeDisabled, petData, isAnimalShelter }) => {
    const dispatch = useDispatch();

    const goToInnerChat = () => {
        dispatch(setChatData({
            petName: petData.name,
            amimalShelterName: petData.adoptionLocationName,
            profilePicture: petData.pictures[0],
            petID: petData.petID,
            email: petData.email,
        }))
        navigation.navigate('Inner Chat')
    };
    
    const animalShelterMockAlert = () => {
        alert("This chat button has no functionality. It serves to emulate what potential adopters see.")
    }

    const styles = StyleSheet.create({
        imageContainer: {
            height: isSwipeDisabled ? 33 : 38,
            width: isSwipeDisabled ? 33 : 38,
        },
    });

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={isAnimalShelter ? animalShelterMockAlert : goToInnerChat}
        >
            <Image style={styles.imageContainer} source={require("../../../assets/chat-with-pet-icon.png")}/>
        </TouchableOpacity>
     );
}

export default ChatWithPet;