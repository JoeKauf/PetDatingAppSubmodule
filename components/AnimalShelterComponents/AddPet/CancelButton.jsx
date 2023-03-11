import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CancelButton = ({ navigation }) => {
    return (
        <TouchableOpacity
                style={styles.cancelButtonContainer}
                onPress={() => navigation.navigate('Shelter Animals')}
        >
            <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cancelButtonContainer: {
        position: 'absolute',
        right: 12,
        marginTop: 60,
    },
    cancelText: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: '0.07em',

        color: '#919191',
    }
});

export default CancelButton;