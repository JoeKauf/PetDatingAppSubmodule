import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { updateAnimalType } from '../../redux/querySettings'
import { useDispatch } from "react-redux";
import {useSelector } from "react-redux";

const CatDogSwitch = () => {
    const dispatch = useDispatch();
    const isDog = useSelector((state) => state.query.type.isDog);

    return (
        <View style={styles.pillContainer}>
            <View style={[isDog ? styles.unselectedLeftPill : styles.selectedLeftPill]}>
                <TouchableOpacity onPress={() => dispatch(updateAnimalType(false))}>
                    <Text style={isDog ? styles.unselected : styles.selected}>
                        Cats
                    </Text>
                    <Image
                        style={styles.image}
                        source={require("../../assets/white-check-icon.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={[isDog ? styles.selectedRightPill : styles.unselectedRightPill]}>
                <TouchableOpacity onPress={() => dispatch(updateAnimalType(true))}>
                    <Text style={isDog ? styles.selected : styles.unselected}>Dogs</Text>
                    <Image
                        style={styles.image}
                        source={require("../../assets/white-check-icon.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    pillContainer: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 17,

        display: 'flex',
        flexDirection: 'row',
    },
    leftPill: {
        borderWidth: 3,
        borderColor: '#23A617',
        width: 144,
        height: 42,

        borderBottomLeftRadius: '50%',
        borderTopLeftRadius: '50%',
    }, 
    selectedLeftPill: {
        borderWidth: 3,
        borderColor: '#23A617',
        width: 144,
        height: 42,
        backgroundColor: '#23A617',
        borderRightWidth: 0,

        borderBottomLeftRadius: '50%',
        borderTopLeftRadius: '50%',
    }, 
    unselectedLeftPill: {
        borderWidth: 3,
        borderColor: '#23A617',
        width: 144,
        height: 42,
        backgroundColor: '#fff',
        borderRightWidth: 0,

        borderBottomLeftRadius: '50%',
        borderTopLeftRadius: '50%',
    },
    selectedRightPill: {
        borderWidth: 3,
        borderColor: '#23A617',
        width: 144,
        height: 42,
        backgroundColor: '#23A617',
        borderLeftWidth: 0,

        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }, 
    unselectedRightPill: {
        borderWidth: 3,
        borderColor: '#23A617',
        width: 144,
        height: 42,
        backgroundColor: '#fff',
        borderLeftWidth: 0,

        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    },
    unselected: {
        color: '#23A617',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        margin: 4,
    },
    selected: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        margin: 4
    },
    image: {
        position: 'absolute',
        width: 20.52,
        height: 15.64,
        top: 9,
        right: 20,
    },
    imageContainer: {
        
        marginTop: -5,
    }
});


export default CatDogSwitch;