import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import InputBar from './InputBar';
import { setDOB } from '../../../redux/addPet'

import { useSelector, useDispatch } from "react-redux";

const PetDOB = ({ navigation }) => {
    const pageNumber = 1
    const dispatch = useDispatch();
    const dob = useSelector((state) => state.addPet.dob);

    return (
        <TouchableOpacity
            style={styles.petNameContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Pet's \nbirthday is"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <InputBar date={true} value={dob} setValue={(text) => dispatch(setDOB(text))} />
                <Text style={[styles.subtitleText]}>Input the date of birth of the animal</Text>
            </View>
            <MainButton text={'Continue'} buttonPress={() => dob.length === 10 ? navigation.navigate('PetGender') : alert("Please fill in appropriate fields.")} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    petNameContainer: {
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
        lineHeight: 27,
        width: 299,

        color: '#6A6A6A',
    }
});

export default PetDOB;