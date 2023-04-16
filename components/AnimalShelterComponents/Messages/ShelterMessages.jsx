/**
 * Name:
 * Functionality:
 */
import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import TitlePage from './TitlePage';
import Messages from '../../ChatAndLikes/Messages';
import { useSelector } from 'react-redux';

const ShelterMessages = ({ navigation }) => {
    const email = useSelector((state) => state.userAuth.email);
    return (
        <View>
            <TitlePage navigation={navigation} />
            <Messages navigation={navigation} isShelter={true} email={email} />
        </View>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 48,
        width: 48,
    },
});

export default ShelterMessages;