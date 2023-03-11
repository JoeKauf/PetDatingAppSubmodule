import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useSelector, useDispatch } from "react-redux";
import { setPhotos } from '../../../redux/addPet'

const PhotoBox = ({ photoNum }) => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.addPet.photos);
    let chosenPhoto;

    if (photoNum === 0) {
        chosenPhoto = photos.one
    } else if (photoNum === 1) {
        chosenPhoto = photos.two
    } else if (photoNum === 2) {
        chosenPhoto = photos.three
    } else if (photoNum === 3) {
        chosenPhoto = photos.four
    } else if (photoNum === 4) {
        chosenPhoto = photos.five
    } else if (photoNum === 5) {
        chosenPhoto = photos.six
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 1],
            quality: 0,
        });


        if (!result.canceled) {
            dispatch(setPhotos([result.assets[0].uri, photoNum]))
        }
    };
    
    return (
        <TouchableOpacity
            style={styles.PhotoBoxImage}
            onPress={pickImage}
            
        >
            {chosenPhoto && <Image source={{ uri: chosenPhoto }} style={styles.image} />}
            {photoNum === 0 && <Text style={styles.profileText}>Profile Picture</Text>}
            <View style={styles.addCircle}><Text style={styles.plusIcon}>+</Text></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PhotoBoxImage: {
        width: 107,
        height: 145,

        margin: 10,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#EAE6E6',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#DAD8D8',
        borderRadius: 8,
    },
    addCircle: {
        position: 'absolute',
        bottom: -8,
        right: -8,

        width: 45,
        height: 45,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: '50%',

        backgroundColor: '#2BCC4F',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
    },
    plusIcon: {
        color: '#ffffff',
        fontSize: 35,
    }, 
    image: {
        width: 103,
        height: 141,
        borderRadius: 8,
    },
    profileText: {
        position: 'absolute',

        fontSize: 14,
        color: '#6A6A6A',
        backgroundColor: '#EAE6E6',
        opacity: .9,
    }
});

export default PhotoBox;