import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setChatData } from "../../redux/chatData"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
    
const FilterByPet = ({ navigation, petData }) => {
    const dispatch = useDispatch();
    
    // const petData = useSelector((state) => state.mypets);
    const petDataSliced = petData.slice(0, 5);

    let petBubbles = [];
    petDataSliced.forEach(pet => {
        const image = { uri: pet.pictures[0]};
        const [petSelected, setPetSelected] = useState(false);

        petBubbles.push(
            <View style={styles.filterContainer} key={pet.petID}>
                <TouchableOpacity
                    activeOpacity={.6}
                    underlayColor="green"
                    // onPress={() => setPetSelected(!petSelected)}
                    onPress={() => 
                        [ dispatch(setChatData({
                            petName: pet.name,
                            amimalShelterName: pet.adoptionLocationName,
                            profilePicture: pet.pictures[0],
                            petID: pet.petID,
                            email: pet.email,
                        })),
                        navigation.navigate('Inner Chat')
                    ]}
                >
                    <View style={styles.petCircle}>
                        <ImageBackground source={image} resizeMode="cover" style={petSelected ? styles.selected : styles.image} imageStyle={{ borderRadius: '50%' }} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.petFilterName}>
                    <View style={styles.unreadMessage} />
                    {pet.name}
                </Text>
            </View>
        )
    });
    return (
        <View style={styles.recentLikesContainer}>
            <Text style={styles.subtitle}>Recent Likes</Text>
            {petBubbles.length > 0 ? 
             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                { petBubbles }
            </ScrollView>
                : <View style={styles.noRecentLikesContainer}>
                    <Text style={styles.noRecentLikesText}>No recent liked pets. Go to the </Text>
                    <Text style={styles.noRecentLikesText}>discover pets page and like pets</Text>
                    <Text style={styles.noRecentLikesText}>to enable this feature.</Text></View>}
        </View>
    )
    
}

const styles = StyleSheet.create({
    subtitle: {
        paddingLeft: 23,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '30px',

        color: '#187B0F',
    },
    petCircle: {
        width: 75,
        height: 75,
        borderRadius: '50%',
    },
    petFilterName: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '19px',
        marginLeft: 5,
        color: '#626762',
    },
    filterContainer: {
        margin: 7.5,
        paddingBottom: 15,
        width: 75,
        textAlign: 'center',
    },
    unreadMessage: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#30D321',
    },
    image: {
        // flex: 1,
        width: 75,
        height: 75,
        borderRadius: '50%',
        justifyContent: "center"
    },
    selected: {
        // flex: 1,
        width: 75,
        height: 75,
        borderRadius: '50%',
        justifyContent: "center",
        shadowColor: 'rgba(36, 166, 24, 1)',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,    
    },
    recentLikesContainer: {
        height: 152,
    },
    noRecentLikesText: {
        fontWeight: '300',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',

        color: '#777777',
    },
    noRecentLikesContainer: {
        margin: 20,
    }
});

export default FilterByPet;