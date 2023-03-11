import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

const GenderSelection = ({ gender, updateValues }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.genderSelectionContianer}>
            <Text style={styles.title}>Gender</Text>
            <View style={styles.genderOptionsContainer}>
                <TouchableOpacity style={styles.maleContainer}
                    onPress={() =>
                        dispatch(updateValues({
                            isMale: !gender.isMale,
                            isFemale: gender.isFemale
                        }))
                    }
                >
                    <Image style={gender.isMale ? styles.maleSelectedImage : styles.image } source={gender.isMale ? require("../../assets/male-selected-icon.png") : require("../../assets/male-black-icon.png")} />
                    <Text style={gender.isMale ? styles.selectedGenderText : styles.genderText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        dispatch(updateValues({
                            isMale: gender.isMale,
                            isFemale: !gender.isFemale
                        }))
                    }
                >
                    <Image style={gender.isFemale ? styles.femaleSelectedImage : styles.image} source={gender.isFemale ? require("../../assets/female-selected-icon.png") : require("../../assets/female-black-icon.png")} />
                    <Text style={gender.isFemale ? [styles.selectedGenderText, {marginLeft: -5}] : [styles.genderText, {marginLeft: -5}]}>Female</Text>
                </TouchableOpacity>
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    maleContainer: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    genderOptionsContainer: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',

        display: 'flex',
        flexDirection: 'row',
    },
    genderSelectionContianer: {
        width: 147.5,
        paddingLeft: 26,
    },
    genderText: {
        paddingRight: 25,
        color: '#514F4F',
        fontSize: 12,
        fontWeight: '300',
    },
    selectedGenderText: {
        paddingRight: 25,
        color: '#23A617',
        fontSize: 12,
        fontWeight: '300',
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,

        color: '#000000',
    },
    image: {
        marginTop: 9,
        marginBottom: 2,
        width: 32,
        height: 32,
    },
    maleSelectedImage: {
        marginTop: 11,
        marginLeft: -2,
        marginBottom: -2,
        width: 34,
        height: 34,
    },
    femaleSelectedImage: {
        marginTop: 11,
        marginBottom: -3,
        width: 32,
        height: 35,
    }
});


export default GenderSelection;