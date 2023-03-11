import React from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import SettingsButton from './SettingsButton';
import LikedButton from './LikedButton';
import ChatButton from './ChatButton';

const HomeMenu = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <View style={{marginLeft: 15, marginRight: windowWidth * .33 -15}}>
                <SettingsButton navigation={navigation} />
            </View>
            <View style={{marginRight: windowWidth * .33, marginTop: -18}}>
                <LikedButton navigation={navigation}/>
            </View>
            <View>
                <ChatButton navigation={navigation} />
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: 23,
  },

});


export default HomeMenu;