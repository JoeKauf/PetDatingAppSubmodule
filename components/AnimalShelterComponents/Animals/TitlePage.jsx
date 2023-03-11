import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const TitlePage = ({isDog, setIsDog, navigation}) => {
    return (
        <View style={styles.titleView}>
            <Image style={styles.imageContainer}
                source={require("../../../assets/shelter-icon.png")}
            />
            <View style={styles.titleText}>
                <TouchableOpacity
                    onPress={() => setIsDog(true)}
                >
                    <Text style={isDog ? styles.title : [styles.title, styles.turnGreen]}>Dogs</Text>
                </TouchableOpacity>
                <View style={styles.titleSeperator}></View>
                <TouchableOpacity
                    onPress={() => setIsDog(false)}
                >
                    <Text style={isDog ? [styles.title, styles.turnGreen] : styles.title}>Cats</Text>
                </TouchableOpacity>  
            </View>
            <Text style={styles.subtitleText}>Tap an animal to preview and see stats</Text>
        </View>
 );
}

const styles = StyleSheet.create({
    titleText: {
        flexDirection: 'row',
    },
    title: {     
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '27px',
        lineHeight: '38.19px',
        // paddingRight: 2,
        // color: '#23A617',
    },
    turnGreen: {     
        color: '#23A617',
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 35,
    },
    imageContainer: {
        height: 48,
        width: 48,
        marginTop: 10,
    },
    titleSeperator: {
        borderRightWidth: '1px solid #000000',
        height: 30,
        // padding: 2,
        margin: 7.5,
    }, 
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        marginTop: 47,
    },
    backButton: {
        position: 'absolute',
        height: 48,
        width: 48,
    },
    subtitleText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#4F544F',
    }
});

export default TitlePage;