import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from "react-redux";
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Keyboard,
    Dimensions,
    ScrollView
} from 'react-native';
import { getChatFromPetId } from '../../../data_layer/Chats';
import { sendAMessage } from '../../../data_layer/Chats';
import { useKeyboard } from "@react-native-community/hooks"
const windowHeight = Dimensions.get('window').height;

const InnerChat = ({ navigation }) => {
    const [Messages, _setMessages] = useState([])
    const [thisChatID, setThisChatID] = useState(null);
    const [userName, setUsername] = useState(null);
    const initializeChatId = (chatId, username) => {
        setThisChatID(chatId)
        setUsername(username)
    }

    const chatData = useSelector((state) => state.chatData.state);
    const userInfo = useSelector((state) => state.userAuth);
    const chatID = thisChatID ? thisChatID : chatData.chatId;
    const userId = userInfo.email;
    
    function setMessages(data) {
        _setMessages(data)
    }

    useEffect(() => {
        getChatFromPetId(chatData.petID, userId, initializeChatId, setMessages)
    }, []);
    
    
    const { keyboardShown, keyboardHeight } = useKeyboard();

    const styles = StyleSheet.create({
    header: {
        height: 160,
        backgroundColor: '#F4F2F2',
        borderBottomWidth: 1,
            borderColor: '#DBD9D9',
    },
    image: {
        width: 75,
        height: 75,
        margin: 8,
        borderRadius: '50%',
    },
    headerContent: {
        top: 28,
        alignItems: 'center',
        justifyContent: 'center',

        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: 19,
        textAlign: 'center',

        color: '#626762',
    },
    bold: {
        fontWeight: '600',
    },
    senderBubble: {
        backgroundColor: 'rgba(36, 166, 24, 0.64)',
        backdropFilter: 'blur(2px)',
        /* Note: backdrop-filter has minimal browser support */
        borderRadius: 15,
        // height: 100,
        maxWidth: 275,
        alignSelf: 'flex-start',
        padding: 12,
        marginHorizontal: 12,
        marginTop: 12,
        overflow: "hidden",
    },
    recieverBubble: {
        backgroundColor: '#DCDCDC',
        backdropFilter: 'blur(2px)',

        borderRadius: 15,
        maxWidth: 275,

        alignSelf: 'flex-start',
        padding: 12,
        marginHorizontal: 12,
        marginTop: 12,
        overflow: "hidden",
    },
    messageBox: {
        flexDirection: 'row',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DBD9D9',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
        margin: 15,
        borderWidth: 1,
    },
        messages: {
        /*To-do: make dynamic text iput styling to account for keyboard
        */
        height: windowHeight - 240 - (keyboardShown && keyboardHeight - 25) ,
    },
    inputText: {
        padding: 8,
        width: 340,
    }, 
    sendButton: {
        position: 'absolute',
        bottom: 0,
        right: 3,
        height: 28,
        width: 28,
    }, 
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        top: 10,
    },
    backButton: {
        height: 48,
        width: 48,
    }
    });
    const image = { uri: chatData.profilePicture };
    
    const [textMessage, setTextMessage] = useState('');
    let messageBubbles = [];
 
    const sendMessage = () => {
        //message, chatId, senderId, userName, petId, shelterId
        sendAMessage(textMessage, chatID, userId, userInfo.name, chatData.petID, chatData.email, initializeChatId)

        Keyboard.dismiss()
        setTextMessage('');
    }

    let previousMessageIsSender = null;
    
    Messages.forEach((message, i) =>
    {
        let isRepititve = previousMessageIsSender === message.isSender;
        messageBubbles.push(
            message.isSender ?
                <View key={i} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}><Text style={[styles.senderBubble, isRepititve && { marginTop: 4 } ]}>{message.messageInfo}</Text></View> :
                <Text key={i} style={[styles.recieverBubble, isRepititve && { marginTop: 4 }]}>{message.messageInfo}</Text>
        )
        previousMessageIsSender = message.isSender;
    }
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.backButton}
                            source={require("../../../assets/back-button-icon.png")}
                    />
                 </TouchableOpacity>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: '50%' }} />
                    <Text>Messaging {userInfo.isShelter ? userName : chatData.amimalShelterName}</Text>
                    <Text>regarding <Text style={styles.bold}>{chatData.petName}</Text></Text>
                </View>
            </View>
            <ScrollView style={styles.messages}>
                {messageBubbles}
            </ScrollView>
            <View style={styles.messageBox}>
                <TextInput style={styles.inputText}
                    clearButtonMode="always"
                    placeholder="Message..."
                    maxLength={300}
                    autoCapitalize="sentences"
                    multiline={true}
                    onChangeText={(newText) => setTextMessage(newText)}
                    value={textMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
                    <Image
                        style={styles.sendButton}
                        source={textMessage.length > 0 ? require("../../../assets/Send-Message-Icon.png") : require("../../../assets/Disabled-Message-Icon.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
    
}




export default InnerChat;