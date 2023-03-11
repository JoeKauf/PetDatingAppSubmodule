import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const AddPetButton = ({ navigation, isDog }) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PetName')}
        >
            <Image style={styles.imageContainer}
                source={require("../../../assets/shelter-icon.png")}
            />
            <Text style={styles.text}>Add a {isDog ? 'Dog' : 'Cat'}</Text>
            <View style={styles.circle}>
                <Text style={styles.plusIcon}>+</Text>
            </View>
        </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
    card: {
        height: 205,
        width: 159,
        margin: 15,
    

        backgroundColor: '#D9D9D9',
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#23A617',

        opacity: '0.8',
    },
    imageContainer: {
        height: 48,
        width: 48,
    },
    circle: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: '50%',

        backgroundColor: 'green',
        right: -14,
        bottom: -14, 

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
    },
    plusIcon: {
        fontWeight: '300',
        fontSize: 40,
        lineHeight: 41,
        /* identical to box height */

        textAlign: 'center',

        color: '#FFFFFF',

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
    }
});

export default AddPetButton;