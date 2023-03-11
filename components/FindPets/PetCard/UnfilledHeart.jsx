import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import { removePet } from '../../../redux/mypets';
import { swipeRight, swipeLeft } from '../../../data_layer/Pets';
import { removeLikedPet } from '../../../data_layer/Pets';

const UnfilledHeart = ({ email, petID, swipe, showSwipeResults, petIndex, isSwipeDisabled, id, setSelectedAnimal }) => {
    const [showHeart, setShowHeart] = useState(true);
    const dispatch = useDispatch();
    
    const removePetByID = () => {
        setSelectedAnimal(undefined);
        removeLikedPet(email, petID)
        setShowHeart(!showHeart);
        dispatch(removePet(id));
    }

    const styles = StyleSheet.create({
        imageContainer: {
            height: isSwipeDisabled ? 35 : 40,
            width: isSwipeDisabled ? 35 : 40,
        },
    });
    !isSwipeDisabled && showSwipeResults[petIndex] === 1 && swipeRight(petID, 'Test Pic')
    !isSwipeDisabled && showSwipeResults[petIndex] === 0 && swipeLeft(petID, 'Test Pic')
    const heartPath =
        isSwipeDisabled ?
            showHeart ? require("../../../assets/filled-heart-icon.png") :
                
            require("../../../assets/unfilled-heart-icon.png"):
            showSwipeResults[petIndex] === 1 ?
            require("../../../assets/filled-heart-icon.png")  :
            require("../../../assets/unfilled-heart-icon.png");
    
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={isSwipeDisabled ? removePetByID : () => swipe('right')}
        >
            <Image style={styles.imageContainer} source={heartPath} />
        </TouchableOpacity>
     );
}


export default UnfilledHeart;