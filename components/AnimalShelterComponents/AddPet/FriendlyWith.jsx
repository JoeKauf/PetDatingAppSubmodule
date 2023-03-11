import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, Image } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import {
    setDogFriendly,
    setCatFriendly,
    setKidFriendly
  } from '../../../redux/addPet'
import { useSelector, useDispatch } from "react-redux";

const FriendlyWith = ({ navigation }) => {
    const pageNumber = 0

    const dispatch = useDispatch();
    const addPet = useSelector((state) => state.addPet);

    const RadioButton = ({itemName, pressHandler, itemStatus}) => {
        return (
            <TouchableOpacity
                onPress={pressHandler}
                style={styles.RadioContainer}
            >
                <Image style={styles.image} source={itemStatus ? require('../../../assets/large-unchecked-icon.png') : require('../../../assets/checked-checkbox-icon.png') } />
                <Text style={styles.RadioText}>{itemName}</Text>
            </TouchableOpacity>)
    }

    return (
        <TouchableOpacity
            style={styles.FriendlyWithContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Friendly \nwith"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <RadioButton itemName={"Dogs"} itemStatus={addPet.isDogFriendly} pressHandler={() => dispatch(setDogFriendly(!addPet.isDogFriendly))} />
                <RadioButton itemName={"Cats"} itemStatus={addPet.isCatFriendly} pressHandler={() => dispatch(setCatFriendly(!addPet.isCatFriendly))} />
                <RadioButton itemName={"Kids"} itemStatus={addPet.isKidFriendly} pressHandler={() => dispatch(setKidFriendly(!addPet.isKidFriendly))} />
                <Text style={[styles.subtitleText]}>Gets along with...</Text>
            </View>

            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('HouseTrained')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    RadioContainer: {
        flexDirection: 'row'
    },
    FriendlyWithContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        top: 80,
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
        /* identical to box height */

        color: '#6A6A6A',
    },
    image: {
        width: 48,
        height: 48,
    }
});

export default FriendlyWith;