import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

const LikedButton = ({navigation}) => {
    const recentLikedAnimals = 7;
    const heartFillHeight = recentLikedAnimals > 8 ? 8 : recentLikedAnimals;
    
    const styles = StyleSheet.create({
        likedAnimalsContainer: {
            height: 48,
            width: 48,
            // add shadows for Android only
        },
        filledHeartContainer: {
            zIndex: -1,
            position: 'absolute',
            overflow: 'hidden',
            bottom: 16,
            right: recentLikedAnimals > 2 ? 21.4 - recentLikedAnimals: 20,
            height: heartFillHeight * 1.9,
            width: 8 + recentLikedAnimals * 1.4,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: '#23A617',
        },
       
    });
    
    const iconWithFill = (
        <View>
            <Image style={styles.likedAnimalsContainer} source={require("../../../assets/liked-animals-icon.png")} />
            <View style={ styles.filledHeartContainer}></View>
        </View>
    )

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Messages', {page: 'Likes'})}>
            {iconWithFill}
        </TouchableOpacity>
     );
}




export default LikedButton;