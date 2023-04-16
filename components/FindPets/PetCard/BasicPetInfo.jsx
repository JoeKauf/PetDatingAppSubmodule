import React from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import UndoAction from './UndoAction';
import PictureProgress from './PictureProgress';
import ShowMorePics from './ShowMorePics';

const BasicPetInfo = ({
    email,
    petData,
    swipe,
    petIndex,
    showSwipeResults,
    isSwipeDisabled,
    goBack,
    selectedPicture,
    setSelectedPicture,
    setSelectedAnimal,
    navigation,
    isAnimalShelter,
}) => {
    const styles = StyleSheet.create({
    infoWrapper: {
        position: 'absolute',
        bottom: 0,
    }, 
    lastPic: {
        position: 'absolute',
        height: isSwipeDisabled ? 400 : 530,
        width: isSwipeDisabled ? 156 : 375 / 2,
        color: '#ffff',
        left: 0,
    },
    nextPic: {
        position: 'absolute',
        height: isSwipeDisabled ? 400 : 530,
        width: isSwipeDisabled ? 156 : 375 / 2,
        color: '#ffff',
        marginLeft: isSwipeDisabled ? 156 : 375 / 2,
    }
    });
    
    function handleChooseNextPhoto(direction) {
        const pictureLength = petData.pictures.length;
        if (direction === "left") {
            setSelectedPicture((selectedPicture + pictureLength - 1) % pictureLength);
        } else {
            setSelectedPicture((selectedPicture + 1) % pictureLength);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                <UndoAction
                    isSwipeDisabled={isSwipeDisabled}
                    goBack={goBack}
                    setSelectedAnimal={setSelectedAnimal}
                />
                <PictureProgress
                    selectedPicture={selectedPicture}
                />
            </View>
            <View style={{ flexDirection: 'row'}}>
                <TouchableHighlight
                    onPress={() => handleChooseNextPhoto("left")}
                    // style={styles.lastPic}
                >
                    <View style={styles.lastPic}></View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => handleChooseNextPhoto("right")}
                >
                    <View style={styles.nextPic}></View>
                </TouchableHighlight>
            </View>
            <View style={styles.infoWrapper}>
                    <ShowMorePics
                        email={email}
                        petData={petData}
                        selectedPicture={selectedPicture}
                        setSelectedPicture={setSelectedPicture} 
                        showSwipeResults={showSwipeResults}
                        isSwipeDisabled={isSwipeDisabled}
                        petIndex={petIndex}
                        swipe={swipe}
                        navigation={navigation}
                        setSelectedAnimal={setSelectedAnimal}
                        isAnimalShelter={isAnimalShelter}
                    />
            </View>
        </View>
     );
}




export default React.memo(BasicPetInfo);