import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import TextBox from './TextBox';

const ShelterInfo = ({_handleMultiInput}) => {

    return (
        <View style={{marginTop: 30}}>
            <TextBox Title="Shelter Name" _handleMultiInput={_handleMultiInput}/>
            <TextBox
                Title="Contact Name"
                _handleMultiInput={_handleMultiInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ShelterInfo;