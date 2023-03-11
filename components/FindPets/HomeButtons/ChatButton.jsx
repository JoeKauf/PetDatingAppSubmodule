import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View} from 'react-native';

const ChatButton = ({navigation}) => {
    let unreadMessages = true;
    const ChatContainer = (
        <View >
            {unreadMessages && <View style={styles.CircleShape}></View>}
            <Image style={styles.imageContainer} source={require("../../../assets/chat-icon.png")} />
        </View>
    )
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Messages', {page: 'Chat'})}>
                {ChatContainer}
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 38,
        width: 36,
    },
    CircleShape: {
        position: 'absolute',
        top: 8,
        left: -1,
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#23A617',
    },
});


export default ChatButton;