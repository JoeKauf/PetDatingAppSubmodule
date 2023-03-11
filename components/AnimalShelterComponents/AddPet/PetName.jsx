import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import InputBar from './InputBar';

import { useSelector, useDispatch } from "react-redux";
import { setName } from '../../../redux/addPet'

const PetName = ({ navigation }) => {
    const pageNumber = 0
    const dispatch = useDispatch();
    const name = useSelector((state) => state.addPet.name);

    return (
        <TouchableOpacity
            style={styles.petNameContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Pet's \nname is"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <InputBar value={name} setValue={(text) => dispatch(setName(text))}/>
                <Text style={[styles.subtitleText]}>This is the name potential adopters will see</Text>
            </View>

            <MainButton text={'Continue'} buttonPress={() => name.length > 0 ? navigation.navigate('Birthday') : alert("Please fill in appropriate fields.")} />
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

export default PetName;