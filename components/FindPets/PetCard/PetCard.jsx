import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import BasicPetInfo from './BasicPetInfo';
import SwipeOverlay from './SwipeOverlays';

const windowWidth = Dimensions.get('window').width;

const PetCard = ({
    email,
    swipe,
    petIndex,
    showSwipeResults,
    petData,
    goBack,
    navigation,
    isSwipeDisabled,
    setSelectedAnimal
    }) => {
    // Selected Picture is between 0 and 5 depending on size
    const [selectedPicture, setSelectedPicture] = useState(0);


    return (
        <View style={[!isSwipeDisabled ? styles.cardContainer : styles.disabledCardContainer, styles.shadowProp]}>
            {isSwipeDisabled && <TouchableOpacity
                        style={styles.grayOutContainer}
                        onPress={() => setSelectedAnimal(undefined)}
            />}
            <ImageBackground source={{ uri: petData.pictures[selectedPicture] }} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 8 }}>
                {!isSwipeDisabled && <SwipeOverlay showSwipeResults={showSwipeResults} petIndex={petIndex} petData={petData} />}
                <BasicPetInfo
                    email={email}
                    petData={petData}
                    showSwipeResults={showSwipeResults}
                    isSwipeDisabled={isSwipeDisabled}
                    petIndex={petIndex}
                    swipe={swipe}
                    goBack={goBack}
                    selectedPicture={selectedPicture}
                    setSelectedPicture={setSelectedPicture}
                    navigation={navigation}
                    setSelectedAnimal={setSelectedAnimal}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    grayOutContainer: {
        position: 'absolute',
        backgroundColor: '#000000',
        width: 1000,
        height: 1000,
        opacity: .65,
        marginTop: -200,
        marginLeft: -200,
    }, 
    cardContainer: {
        position: 'absolute',
        height: 667,
        width: 375,
        backgroundColor: 'black',
        marginRight: (windowWidth - 375) / 2,
        marginLeft: (windowWidth - 375) / 2,
        marginTop: 35,
        borderRadius: '8',
        zIndex: -1,
    },
    disabledCardContainer: {
        position: 'absolute',
        height: 547,
        width: 312,
        backgroundColor: 'black',
        // marginRight: (windowWidth - 375) / 2,
        marginLeft: (windowWidth - 312) / 2,
        marginTop: 35,
        borderRadius: '8',
        zIndex: -1,
    },  
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: '8',
        // add shadows for Android only
        elevation: 10,
 
        // add shadows for iOS only
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5
    },
});

export default PetCard;