import React, {useState} from 'react';
import { StyleSheet, Image} from 'react-native';
import { useDispatch } from "react-redux";
import { addPet } from '../../../redux/mypets';

const SwipeOverlay = ({ showSwipeResults, petIndex, petData }) => {
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    
    !isAdded && showSwipeResults[petIndex] === 1 && dispatch(addPet(petData)) && setIsAdded(true)
    return (
        showSwipeResults[petIndex] === 1 && <Image style={styles.imageContainer} source={require("../../../assets/filled-heart-icon.png")} />
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        left: 75,
        height: 250,
        width: 250,
    },
});


export default SwipeOverlay;