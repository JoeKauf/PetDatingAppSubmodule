import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const MainButton = ({text, buttonPress }) => {
    return (
            <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={buttonPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ButtonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 30,

        backgroundColor: '#23A617',
        height: 63,
        width: 352,
        borderRadius: 25,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
    },
    buttonText: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.2,

        fontWeight: '500',
        letterSpacing: '1em',
        fontSize: 28,
        lineHeight: 41,

        color: '#FFFFFF',
    }
});

export default MainButton;