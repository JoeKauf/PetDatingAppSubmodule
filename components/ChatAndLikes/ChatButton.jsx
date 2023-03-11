import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { setChatData } from '../../redux/chatData';
import { useDispatch } from 'react-redux';

const ChatButton = ({ navigation, petData }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => [dispatch(setChatData({
                petName: petData.name,
                amimalShelterName: petData.adoptionLocationName,
                profilePicture: petData.pictures[0],
                petID: petData.petID,
                email: petData.email
            })), navigation.navigate('Inner Chat')]}>
            <Image style={styles.imageContainer} source={require("../../assets/chat-with-pet-icon.png")}/>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        height: 27,
        width: 27,
    },
});


export default ChatButton;