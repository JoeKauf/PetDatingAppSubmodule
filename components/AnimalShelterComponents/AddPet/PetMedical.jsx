import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import { useSelector, useDispatch } from "react-redux";
import { setMedicalStatus } from '../../../redux/addPet'

const PetMedical = ({ navigation, sideText }) => {
    const charLimit = 69

    const dispatch = useDispatch();
    const medicalStatus = useSelector((state) => state.addPet.medicalStatus);

    let charRemaining = charLimit
    if (medicalStatus.length) {
        charRemaining = charLimit - medicalStatus.length
    }
   
    

    const pageNumber = 0
    return (
        <TouchableOpacity
            style={styles.PetMedicalContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Medical \nstatus"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <TextInput
                    style={styles.inputbox}
                    placeholder='My medical status is...'
                    multiline={true}
                    value={medicalStatus}
                    onChangeText={(text) => dispatch(setMedicalStatus(text))}
                />
                <Text style={styles.charLimit}>Characters left: {charRemaining}</Text>
                <Text style={styles.subtitleText}>Include things like: vaccination status, health issues, spay/neuter, etc...</Text>
            </View>

            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('PetDescription')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PetMedicalContainer: {
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

export default PetMedical;