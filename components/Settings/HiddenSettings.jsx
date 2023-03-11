import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
//C:\Users\17049\Documents\GitHub\PetDatingApp\AdoptAPet\assets\back-button-icon.png
const HiddenSettings = ({ disableButton, route, title, subtitle, info, additionalPage }) => {
    const charLimit = 69
    const hasSubtitle = subtitle.length > 0
    let charCount = 0
    let text = ""

    if (info.length > 0 && charCount != charLimit) {
        info.every((word, i) => {
            let lastWord = i === info.length - 1
            let firstWord = i === 0
            charCount += word.length
            
            if (charCount < charLimit) {
                charCount += 2
                if (firstWord) {
                    text += word
                } else if (lastWord) {
                    text += ", and " + word
                } else {
                    text += ", " + word
                }
            } else {
                text += "..."
                return false;
            }
            return true;
        })
    }

    const ButtonText = () => {
        return (
            <View>
                <Text
                    style={disableButton ?
                        styles.subtitleDiabledButton :
                        styles.subtitle}
                >{subtitle}</Text >
                <Text
                    style={hasSubtitle ?
                        disableButton ? styles.subtitleInfoDisabledButton : styles.subtitleInfo :
                        styles.info}>{text}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {disableButton ?
                <ButtonText /> :
                <TouchableOpacity style={styles.touchArea}
                onPress={route}
            >
                <ButtonText />
                <Image style={styles.image} source={require("../../assets/back-button-icon.png")} />
            </TouchableOpacity>} 
        </View>
 );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 30,
        width: 400,
        height: 50, 
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    touchArea: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: { 
        marginLeft: 26.375,
        paddingRight: 50,
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#000000',
    },
    subtitle: {
        position: 'absolute',
        fontWeight: '300',
        fontSize: 18,
        lineHeight: 25,
        right: 25,
        top: -5,
        /* identical to box height */

        color: '#000000',
    },
    subtitleDiabledButton: {
        fontWeight: '300',
        fontSize: 18,
        lineHeight: 25,
        right: 5,
        top: -5,
        /* identical to box height */

        color: '#000000',
    },
    info: {
        position: 'absolute',
        right: 25,
        width: 250,
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'right',

        color: '#514F4F',
    }, 
    subtitleInfo: {
        position: 'absolute',
        right: 25,
        top: 15,

        width: 250,
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 21.82,
        textAlign: 'right',

        color: '#514F4F',
    },
    subtitleInfoDisabledButton: {
        position: 'absolute',
        right: 5,
        top: 15,

        width: 250,
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 21.82,
        textAlign: 'right',

        color: '#514F4F',
    },
    image: {
        position: 'absolute',
        right: 0,

        width: 25,
        height: 25,
        transform: [{ rotate: '180deg'}]
    }
});


export default HiddenSettings;