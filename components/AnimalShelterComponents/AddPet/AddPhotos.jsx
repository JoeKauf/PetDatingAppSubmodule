import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import AddPetTitle from './AddPetTitle';
import MainButton from './MainButton';
import PhotoBox from './PhotoBox';
import addAPet from '../../../data_layer/Pets'
import { useSelector } from "react-redux";

const AddPhotos = ({ navigation }) => {   
    const sheterInfo = useSelector((state) => state.userAuth)
    const petData = useSelector((state) => state.addPet);
    const queryBreeds = useSelector((state) => state.query.breed);

    const addPet = () => {
        if (petData.photos.one &&
            petData.photos.two &&
            petData.photos.three &&
            petData.photos.four &&
            petData.photos.five &&
            petData.photos.six) {
            
            addAPet(
                sheterInfo.name,
                sheterInfo.email,  // Shelter Email
                petData.name,
                petData.isDog ? queryBreeds.dog : queryBreeds.cat,  // Breed
                petData.isDog,
                petData.isMale,
                petData.dob,
                petData.isKidFriendly,
                petData.isDogFriendly,
                petData.isCatFriendly,
                petData.price, // Price
                petData.weight,
                petData.activityLevel,
                petData.isHouseTrained,
                petData.medicalStatus,
                petData.petDescription,
                petData.photos.one,
                petData.photos.two,
                petData.photos.three,
                petData.photos.four,
                petData.photos.five,
                petData.photos.six
            )
            navigation.navigate('Shelter Animals')
        } else {
            alert("Please select six photos.")
        }
    }

    const pageNumber = 0
    const phototBoxes = []

    for (let i = 0; i < 6; i++) {
        phototBoxes.push(<PhotoBox photoNum={i} key={i} />)
    } 
    
    return (
        <TouchableOpacity
            style={styles.AddPhotosContainer}
            activeOpacity={1}
            onPress={Keyboard.dismiss}
        >
            <AddPetTitle
                navigation={navigation}
                titleWords={"Add \nphotos"}
                pageNumber={pageNumber}
            />
            <View style={styles.centerInformation}>
                {phototBoxes}
            </View>

            <MainButton text={'Add Pet'} buttonPress={addPet} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    AddPhotosContainer: {
        width: '100%',
        height: '100%',
    },
    centerInformation: {
        top: 35,

        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subtitleText: {
        fontWeight: '400',
        fontSize: 18,
        // lineHeight: 27,
        width: 350,

        color: '#6A6A6A',
    },
});

export default AddPhotos;