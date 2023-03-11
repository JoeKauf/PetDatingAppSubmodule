import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

const UndoAction = ({goBack, isSwipeDisabled, setSelectedAnimal}) => {
    return (
        <TouchableOpacity
            style={{height:38, width: 38, margin: 10,}}
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
            onPress={isSwipeDisabled ? () => setSelectedAnimal(undefined)  : () => goBack()}>
            <Image style={styles.imageContainer} source={isSwipeDisabled ? require("../../../assets/exit-pet-card-icon.png") : require("../../../assets/undo_icon.png")} />
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 38,
        width: 38,
        zIndex: 100,
    },
});


export default UndoAction;