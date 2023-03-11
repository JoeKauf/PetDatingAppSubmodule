import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const ChatButton = ({navigation, petData}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Inner Chat')}>
            <Image style={styles.imageContainer} source={require("../../../assets/chat-with-pet-icon.png")}/>
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