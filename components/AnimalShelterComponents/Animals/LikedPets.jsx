import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import AddPetButton from './AddPetButton';

const LikedPets = ({ isDog, navigation, setSelectedAnimal, petData, email }) => {
    let petCards = [];
    petData.forEach((pet, i) => petCards.push(
        <TouchableOpacity
            style={styles.petCardContainer}
            key={i}
            onPress={() => setSelectedAnimal(pet)}
        >
            <ImageBackground source={{ uri: pet.pictures[0] }} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 8 }}>
                <LinearGradient
                    colors={['black', 'transparent']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.gradient}
                >
                    <View
                        style={styles.nameContainer}
                    >
                        <Text style={styles.AnimalName}>{pet.name}</Text>
                    </View>
                    <View style={styles.ChatHeartContainer}>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    ));

    return (
        <View syle={styles.promptContainer}>
            <ScrollView>
                <View style={styles.cardsContainer}>
                    <AddPetButton isDog={isDog} navigation={navigation} />
                    {petCards}
                </View>
            </ScrollView>
        </View>
 );
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    promptContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    promptText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '15px',
        left: 100,
        color: '#4F544F',
    }, 
    petCardContainer: {
        width: 159,
        height: 205,
        margin: 15,
    }, 
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15,
        paddingTop: -10,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: '8',
        elevation: 10,
 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5
    },
    ChatHeartContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        right: 30,
        bottom: 3,
    }, 
    AnimalName: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 33,

        color: '#FFFFFF',
    }, 
    nameContainer: {
        // position: 'absolute',
        bottom: 2,
        left: 6,
    },
});

export default LikedPets;