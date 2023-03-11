import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const TitlePage = () => {
    return (
        <View style={styles.titleView}>
            <Text style={styles.title}>Pet App</Text>
        </View>
 );
}

const styles = StyleSheet.create({
    title: { 
    top: '50%',
    textAlign: 'center',
    justifyContent: 'center',
    
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '33px',

    color: '#23A617',
    },
    titleView: {
        borderBottomColor: '#DBD9D9',
        borderBottomWidth: 1,
        height: 90,       
    },
});


export default TitlePage;