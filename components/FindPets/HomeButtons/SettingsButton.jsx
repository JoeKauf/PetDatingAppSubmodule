import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

const SettingsButton = ({navigation}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Settings')}>
            <Image style={styles.imageContainer} source={require("../../../assets/settings-icon.png")} />
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 31,
        width: 34,
    },
});


export default SettingsButton;