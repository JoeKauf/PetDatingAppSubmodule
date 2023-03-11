import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import TextBox from './TextBox';

const ShelterLocation = ({_handleMultiInput}) => {
    return (
        <View style={{ marginTop: 30 }}>
            <TextBox Title="Street Address" inputTitle="AddressOne" _handleMultiInput={_handleMultiInput}/>
            <TextBox Title="Apt. Suite, etc (optional)" inputTitle="AddressTwo" _handleMultiInput={_handleMultiInput}/>
            <TextBox Title="Country" _handleMultiInput={_handleMultiInput}/>
            <TextBox Title="Zip Code" inputTitle="Zip" _handleMultiInput={_handleMultiInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ShelterLocation;