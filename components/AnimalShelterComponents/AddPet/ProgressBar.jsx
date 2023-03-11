import React from 'react';
import { StyleSheet, View } from 'react-native';

const ProgressBar = ({ pageNumber }) => {
    const numberOfPage = 10
    const widthMultuplier = 392 / numberOfPage
    const progressWidth = pageNumber * widthMultuplier;
    return (
        <View style={[styles.progressBar, {width: `${progressWidth}%`} ]} />
    );
}

const styles = StyleSheet.create({
    progressBar: {
        marginTop: 40,
        backgroundColor: '#30D321',
        height: 5,
    }
});

export default ProgressBar;