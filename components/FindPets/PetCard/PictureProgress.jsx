import React from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const PictureProgress = ({selectedPicture}) => {
    // Set the number of circles based on the amount of pictures
    var circles = [];

    for (let i = 0; i < 6; i++) {        
        circles.push(<View key={i} style={[styles.CircleShape, { backgroundColor: i === selectedPicture ? '#23A617' : '#FFFFFF'}]}></View>)
    }

    return (
        <View style={styles.placeCircles}>
            {circles}
        </View>
    );
}

const styles = StyleSheet.create({
    placeCircles: {
        flexDirection: 'row',
        // position: 'absolute',
        margin: 10,
    },
    CircleShape: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        margin: 2,
    },
});

export default PictureProgress;