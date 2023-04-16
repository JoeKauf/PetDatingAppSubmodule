import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, Image } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import { useSelector, useDispatch } from "react-redux";
import { setEnergyLevel } from '../../../redux/addPet'

const EnergyLevel = ({ navigation }) => {
    const pageNumber = 0

    const dispatch = useDispatch();
    const activityLevel = useSelector((state) => state.addPet.activityLevel);


    const RadioButton = ({itemName}) => {
        return (
            <TouchableOpacity
                onPress={() => dispatch(setEnergyLevel(itemName))}
                style={styles.RadioContainer}
            >
                <Image style={styles.image} source={activityLevel != itemName ? require('../../../assets/unchecked-radio-icon.png') : require('../../../assets/checked-radio-icon.png') } />
                <Text style={styles.RadioText}>{itemName}</Text>
            </TouchableOpacity>)
    }

    return (
        <TouchableOpacity
            style={styles.EnergyLevelContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Energy \nlevel"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <RadioButton itemName={"Sedentary"} />
                <RadioButton itemName={"Low"} />
                <RadioButton itemName={"Medium"} />
                <RadioButton itemName={"High"} />
                <RadioButton itemName={"Very High"} />
                <Text style={[styles.subtitleText]}>How much can prospective adopters expect me to exercise</Text>
            </View>

            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('PetMedical')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    RadioContainer: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    EnergyLevelContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        top: 30,
        left: 50
    },
    subtitleText: {
        top: 30,
        left: -5,

        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        width: 299,

        color: '#6A6A6A',
    },
    RadioText: {
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 55,
        marginLeft: 25,
        top: -7,
        /* identical to box height */

        color: '#6A6A6A',
    },
    image: {
        width: 48,
        height: 48,
    }
});

export default EnergyLevel;