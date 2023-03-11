import React from 'react';
import {View, StyleSheet, Dimensions, Image } from 'react-native';
import chatImage from '../../../assets/chat-icon.png'
import NavItem from './NavItem';

const BottomNav = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <NavItem styles={styles.navigationRight} source={chatImage} navigationLocation="ShelterMessages" navigation={navigation} />
    );
}

const styles = StyleSheet.create({
    navigationRight: {
        position: 'absolute',
        right: 0,
    },

});


export default BottomNav;