import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import { useSelector, useDispatch } from "react-redux";
import { setGender } from '../../../redux/addPet'
    
const PetGender = ({ navigation }) => {
    const dispatch = useDispatch();

    const isMale = useSelector((state) => state.addPet.isMale);
    const pageNumber = 2

    return (
        <View
            style={styles.PetGenderContainer}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"The \npet is a"}
                pageNumber={pageNumber}
            />
            <View style={[styles.centerInformation, {top: 130}]}>
                <TouchableOpacity
                    style={[isMale ? styles.selectedPill : styles.unselectedPill, styles.centerInformation]}
                    activeOpacity={isMale && 1}
                    onPress={ () => dispatch(setGender(true))}
                >
                    <Text style={isMale ? styles.selectedText : styles.unselectedText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[isMale ? styles.unselectedPill : styles.selectedPill, , styles.centerInformation]}
                    activeOpacity={!isMale && 1}
                    onPress={ () => dispatch(setGender(false))}
                >
                    <Text style={isMale ? styles.unselectedText : styles.selectedText}>Female</Text>
                </TouchableOpacity>
            </View>
            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('PetBreed')} />
        </View>
    );
}

const styles = StyleSheet.create({
    PetGenderContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        // top: 135,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedPill: {
        borderWidth: 3.25,
        borderColor: '#23A617',
        borderRadius: 25,
        width: 352,
        height: 63,

        margin: 11.5,
    },
    unselectedPill: {
        borderWidth: 2.5,
        borderColor: '#6A6A6A',
        borderRadius: 25,
        width: 352,
        height: 63,
    },
    unselectedText: {
        fontWeight: '400',
        fontSize: 27,
        lineHeight: 36,

        color: '#6A6A6A',
    },
    selectedText: {
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 36,

        color: '#23A617',
    }
});

export default PetGender;