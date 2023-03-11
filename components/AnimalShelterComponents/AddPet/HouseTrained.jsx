import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';

import { useSelector, useDispatch } from "react-redux";
import { setHouseTrained } from '../../../redux/addPet'
    
const HouseTrained = ({ navigation }) => {
    const dispatch = useDispatch();

    const isHouseTrained = useSelector((state) => state.addPet.isHouseTrained);
    const pageNumber = 2

    return (
        <View
            style={styles.HouseTrainedContainer}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Is the pet \nhousetrained?"}
                pageNumber={pageNumber}
            />
            <View style={[styles.centerInformation, {top: 130}]}>
                <TouchableOpacity
                    style={[isHouseTrained ? styles.selectedPill : styles.unselectedPill, styles.centerInformation]}
                    activeOpacity={isHouseTrained && 1}
                    onPress={ () => dispatch(setHouseTrained(true))}
                >
                    <Text style={isHouseTrained ? styles.selectedText : styles.unselectedText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[isHouseTrained ? styles.unselectedPill : styles.selectedPill, , styles.centerInformation]}
                    activeOpacity={!isHouseTrained && 1}
                    onPress={ () => dispatch(setHouseTrained(false))}
                >
                    <Text style={isHouseTrained ? styles.unselectedText : styles.selectedText}>No</Text>
                </TouchableOpacity>
            </View>
            <MainButton text={'Continue'} buttonPress={() => navigation.navigate('EnergyLevel')} />
        </View>
    );
}

const styles = StyleSheet.create({
    HouseTrainedContainer: {
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

export default HouseTrained;