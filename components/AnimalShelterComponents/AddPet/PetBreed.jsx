import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import InputBar from './InputBar';
import BreedDropdown from './BreedDropdown';

const PetBreed = ({ navigation }) => {
    const pageNumber = 2
    return (
        <View
            style={styles.PetBreedContainer}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Select all relevant breeds"}
                pageNumber={pageNumber}
            />
            <View style={styles.dropdownContainer}>
                <BreedDropdown />
            </View>
            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('PetWeight')} />
        </View>
    );
}

const styles = StyleSheet.create({
    PetBreedContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        // top: 135,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        padding: 10,
        marginTop: 30,
   }
});

export default PetBreed;