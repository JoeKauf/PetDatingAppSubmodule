import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar';
import BackButton from './BackButton';
import CancelButton from './CancelButton';
const AddPetTitle = ({navigation, titleWords, pageNumber}) => {
    return (
        <View style={{marginBottom: 175,}}>
            <ProgressBar pageNumber={pageNumber} />
            <BackButton navigation={navigation} />
            <CancelButton navigation={navigation} />
            <Text style={styles.titleText}>{titleWords}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        position: 'absolute',
        top: 105,
        left: 65,
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 55,
        width: 299,

        color: '#363434',
    }
});

export default AddPetTitle;