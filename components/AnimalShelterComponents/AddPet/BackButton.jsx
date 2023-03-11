import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
        >
            <Image
                style={styles.backButton}
                source={require("../../../assets/back-button-icon.png")}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        marginTop: 60,
    },
    backButton: {
        position: 'absolute',
        height: 48,
        width: 48,
    }
});

export default BackButton;