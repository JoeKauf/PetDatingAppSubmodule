import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import InputBar from './InputBar';

import { setPrice } from '../../../redux/addPet'
import { useSelector, useDispatch } from "react-redux";

const PetPrice = ({ navigation, sideText }) => {
    const pageNumber = 0

    const dispatch = useDispatch();
    const price = useSelector((state) => state.addPet.price);
    return (
        <TouchableOpacity
            style={styles.PetPriceContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Pet's \nprice"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <InputBar
                    barWidth={130}
                    sideText={'$'}
                    side={'left'}
                    placeholder={'---,---'}
                    maxLength={6}
                    value={price}
                    setValue={(text) => dispatch(setPrice(text))}
                />
                <Text style={[styles.subtitleText]}>Enter a whole number (40, 30, 100)</Text>
            </View>
            <MainButton text={'Continue'} buttonPress={() => price ? navigation.navigate('FriendlyWith') : alert("Please fill in appropriate fields.")} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PetPriceContainer: {
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
        width: 175,

        color: '#6A6A6A',
    }
});

export default PetPrice;