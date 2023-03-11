import React, {useState} from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useDispatch } from "react-redux";
// import { removePet } from '../../redux/mypets';
// import { removeLikedPet } from '../../data_layer/Pets';

const Heart = ({id, petID, email}) => {
    // const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(true);
    // const heartPath = isLiked ? require("../../assets/filled-heart-icon.png") : require("../../assets/unfilled-heart-icon.png");
    const heartPath = isLiked ? require("../../../assets/filled-heart-icon.png") : require("../../../assets/unfilled-heart-icon.png");

    const HeartPress = () => {
        // setIsLiked(!isLiked)
        // dispatch(removePet(id))
        // removeLikedPet(email, petID);
    }

    return (
        <TouchableHighlight
            onPress={HeartPress}
        >
            <Image style={styles.imageContainer} source={heartPath} />
        </TouchableHighlight>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 27,
        width: 27,
    },
});


export default Heart;