import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import { useSelector, useDispatch } from "react-redux";
import { setDescription } from '../../../redux/addPet'

const PetDescription = ({ navigation, sideText }) => {
    const charLimit = 69

    const dispatch = useDispatch();
    const petDescription = useSelector((state) => state.addPet.petDescription);

    let charRemaining = charLimit
    if (petDescription.length) {
        charRemaining = charLimit - petDescription.length
    }
   
    const pageNumber = 0

    return (
        <TouchableOpacity
            style={styles.PetDescriptionContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Pet \ndescription"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <TextInput
                    style={styles.inputbox}
                    placeholder='Interesting things about me...'
                    multiline={true}
                    value={petDescription}
                    onChangeText={(text) => dispatch(setDescription(text))}
                    maxLength={69}
                />
                <Text style={styles.charLimit}>Characters left: {charRemaining}</Text>
                <Text style={styles.subtitleText}>Include things such as personality and unique traits...</Text>
            </View>

            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('AddPhotos')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PetDescriptionContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        top: 135,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitleText: {
        fontWeight: '400',
        fontSize: 18,
        // lineHeight: 27,
        width: 350,

        color: '#6A6A6A',
    },
    inputbox: {
        // opacity: 0.2,
        
        borderWidth: 2,
        borderColor: '#rgba(35, 166, 23, .2)',
        borderRadius: 14,
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
        
        width: 352,
        height: 162,
    },
    charLimit: {
        position: 'absolute',
        right: 40,
        top: 140,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,

        color: 'rgba(0, 0, 0, 0.43)',
    }
});

export default PetDescription;