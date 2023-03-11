import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import { getChats } from '../../data_layer/Chats';
import { setChatData } from '../../redux/chatData';
import { useDispatch } from "react-redux";

const Messages = ({ petData, navigation, email }) => {
    const [chatMessages, setChatMessages] = useState([])

    const dispatch = useDispatch();
    
    function openUpChat(data) {
        dispatch(setChatData({
            petName: data.petName,
            amimalShelterName: data.amimalShelterName,
            profilePicture: data.profilePicture,
            petID: data.petId,
            email: data.email,
        }))
        navigation.navigate('Inner Chat')        
    }

    let petMessages = [];

    function setMessages(messages) {
        setChatMessages(messages);
    }

    

    chatMessages.forEach((pet, i) => {
        const image = { uri: pet.profilePicture };
        petMessages.push(
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                // Switch out onPress to work with specific pets
                onPress={() => openUpChat(pet)}
                key={i}
            >
                <View style={styles.messageContainer}>
                    <View style={styles.petCircle}>
                        <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: '50%' }} />
                    </View>
                    <View style={styles.NameMessageContainer}>
                        <Text style={styles.animalName}>{pet.petName}</Text>
                        <Text style={pet.isRead ? styles.readMessage : styles.unreadMessage}>{pet.lastMessage}</Text>
                    </View>
                    <View style={styles.ShelterTimeContainer}>
                        <Text style={styles.TimeSent}>{pet.dateTime}</Text>
                        <Text style={styles.animalShelterName}>{pet.amimalShelterName}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    })
    

    useEffect(() => {
        getChats(email, setMessages);
    }, [])
    
    
    return (
        <View>
            <Text style={styles.subtitle}>Messages</Text>
            {petMessages.length > 0 ?
                <ScrollView style={{height: 565}}>{petMessages}</ScrollView> :
                <View style={styles.noMessagesContainer}>
                    <Text style={styles.noMessagesText}>No Messages</Text>
                    <Text style={styles.noMessagesText}>(click on a pet to start a chat)</Text>
                </View>}
        </View>
    )
    
}

const styles = StyleSheet.create({
    subtitle: {
        paddingTop: 6,
        paddingBottom: 12,
        paddingLeft: 23,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '30px',

        color: '#187B0F',
    },
    messageContainer: {
        height: 85,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#DBD9D9',
        padding: 11,
        flexWrap: 'wrap',
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: '50%',
        marginRight: 10,
    },
    animalName: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '23px',

        color: '#020202',
    },
    unreadMessage: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '16px',

        color: '#24A618',
    }, 
    readMessage: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '16px',
        /* identical to box height */


        color: '#4F544F',
    },
    NameMessageContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    animalShelterName: {
        top: -15,
        // right: -10,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '19px',
        // marginTop: 47,
        // alignSelf: 'flex-end',

        color: '#333533',
        opacity: '0.5',
    },
    ShelterTimeContainer: {
        position: 'absolute',
        top: 11,
        right: 5,
    },
    TimeSent: {
        position: 'relative',
        top: -10, // Baseline is -15
        right: '0%',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */

        color: '#333533',
    },
    noMessagesContainer: {
        paddingTop: 15,
        height: '100%',
    },
    noMessagesText: {
        fontWeight: '300',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',

        color: '#777777',
    }
});

export default Messages;