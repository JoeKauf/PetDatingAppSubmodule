import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const NavItem = ({ navigation, navigationLocation, source }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate(navigationLocation)}>
            <Image style={styles.imageContainer} source={source}/>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 38,
        width: 36,
    },
});


export default NavItem;