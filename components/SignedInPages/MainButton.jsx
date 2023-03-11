import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainButton = ({ buttonText, onButtonClick}) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onButtonClick}
            activeOpacity={.75}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>  
        </TouchableOpacity>    
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#23A617',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 12,
        width: 299,
        height: 44,
    },
    buttonInactive: {
        backgroundColor: '#D1D1D1',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 12,
        width: 299,
        height: 44,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: '0.05em',
        marginTop: 6,

        color: '#FFFFFF',
    },
    buttonInactiveText: {
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: '0.05em',
        marginTop: 6,

        color: '#FFFFFF',
    }
});

export default MainButton;