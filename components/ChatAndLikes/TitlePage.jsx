import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const TitlePage = ({isChatToggle, setIsChatToggle, navigation}) => {
    return (
        <View style={styles.titleView}>
            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={styles.backButton}
                    source={require("../../assets/back-button-icon.png")}
                    />
            </TouchableOpacity>
            <Image style={styles.imageContainer}
                source={isChatToggle ?
                    require("../../assets/chat-title-icon.png") :
                    require("../../assets/green-likes-icon.png") 
                }
            />
            <View style={styles.titleText}>
                <TouchableOpacity
                    onPress={() => setIsChatToggle(false)}
                >
                    <Text style={isChatToggle ? styles.title : [styles.title, styles.turnGreen]}>Likes</Text>
                </TouchableOpacity>
                <View style={styles.titleSeperator}></View>
                <TouchableOpacity
                    onPress={() => setIsChatToggle(true)}
                >
                    <Text style={isChatToggle ? [styles.title, styles.turnGreen] : styles.title}>Chat</Text>
                </TouchableOpacity>  
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    titleText: {
        flexDirection: 'row',
    },
    title: {     
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '27px',
        lineHeight: '38.19px',
        // paddingRight: 2,
        // color: '#23A617',
    },
    turnGreen: {     
        color: '#23A617',
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 35,
    },
    imageContainer: {
        height: 42,
        width: 47,
        marginTop: 10,
    },
    titleSeperator: {
        borderRightWidth: '1px solid #000000',
        height: 30,
        // padding: 2,
        margin: 7.5,
    }, 
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        marginTop: 47,
    },
    backButton: {
        position: 'absolute',
        height: 48,
        width: 48,
    }
});

export default TitlePage;