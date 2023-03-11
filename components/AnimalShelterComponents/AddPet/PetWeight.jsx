import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import InputBar from './InputBar';

import { useSelector, useDispatch } from "react-redux";
import { setWeight } from '../../../redux/addPet'

const PetWeight = ({ navigation, sideText }) => {
    const pageNumber = 0

    const dispatch = useDispatch();
    const weight = useSelector((state) => state.addPet.weight);

    return (
        <TouchableOpacity
            style={styles.PetWeightContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Pet's \nweight"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                <InputBar
                    barWidth={57}
                    sideText={'lbs'}
                    side={'right'}
                    placeholder={' ---'}
                    maxLength={3}
                    value={weight}
                    setValue={(text) => dispatch(setWeight(text))}
                />
                <Text style={[styles.subtitleText]}>Weight in lbs</Text>
            </View>
            <MainButton text={'Continue'} buttonPress={() => weight ? navigation.navigate('PetPrice') : alert("Please fill in appropriate fields.")} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PetWeightContainer: {
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
        width: 150,

        color: '#6A6A6A',
    }
});

export default PetWeight;